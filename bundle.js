const tempy = require('tempy');
const cp = require('child_process');
const path = require('path');
const fs = require('fs');
const os = require('os');

// Global variables.
const ORG = 'nodef';
const PACKAGE = 'extra-number';
const STANDALONE = 'number';
const BIN = (cp.execSync('npm prefix -g')+'/bin/').replace('\n', '');
const STDIO = [0, 1, 2];
const EOL = os.EOL;



function toSnakeCase(x) {
  if(x.search(/[a-z]/)<0) return x.replace(/[^A-Za-z0-9]/, '-').toLowerCase();
  return x.replace(/[^A-Za-z0-9]|[^A-Za-z0-9]?([A-Z])/g, '-$1').toLowerCase();
}

// Get filename.
function resolve(pth) {
  var ext = path.extname(pth);
  return ['.js', '.ts', '.json'].includes(ext)? pth:pth+'.js';
}

// Get requires from code.
function pkgRequires(pth, z=[]) {
  var dat = fs.readFileSync(resolve(pth), 'utf8');
  var pkgs = [], re = /require\(\'(.*?)\'\)/g;
  for(var m=null; (m=re.exec(dat))!=null;)
  { pkgs.push(m[1]); z.push(m[1]); }
  if(pkgs.length===0) return z;
  var dir = path.dirname(pth);
  for(var p of pkgs)
    if(/^\./.test(p)) pkgRequires(path.join(dir, p), z);
  return z;
}

// Update package information.
function pkgUpdate(pkg, o) {
  var p = pkg;
  p.name = `@${o.org}/${toSnakeCase(o.name)}`;
  p.description = o.readme.replace(/\r?\n[\s\S]*/, '').replace(/[\_\*\[\]]/g, '');
  p.main = o.main||'index.js';
  p.scripts = {test: 'exit'};
  Array.prototype.push.apply(p.keywords, o.name.split(/\W/));
  p.keywords = Array.from(new Set(p.keywords));
  p.dependencies = Object.assign(p.dependencies||{}, p.devDependencies);
  for(var d of Object.keys(p.dependencies||[]))
    if(!o.requires.includes(d)) p.dependencies[d] = undefined;
  p.devDependencies = undefined;
  return p;
}

// Scatter a file to package.
function pkgScatter(pth, o) {
  console.log('pkgScatter:', pth, o);
  var name = path.basename(pth);
  name = name.substring(0, name.length-path.extname(name).length);
  var pre = pth.substring(0, pth.length-path.extname(pth).length);
  var url = `https://raw.githubusercontent.com/wiki/${ORG}/${PACKAGE}/${name}.md`;
  cp.execSync(BIN+`download ${url} > ${pre}.md`, {stdio: STDIO});
  var license = fs.readFileSync('LICENSE', 'utf8');
  var readme = fs.readFileSync(pre+'.md', 'utf8');
  var index = fs.readFileSync(pth, 'utf8');
  readme = readme.replace(/```/,
    `> This is part of package [${PACKAGE}].`+EOL+EOL+
    `[${PACKAGE}]: https://www.npmjs.com/package/${PACKAGE}`+EOL+EOL+
    '```');
  index = index.replace(new RegExp(`less (.*?)${name}.md`, 'g'), `less $1README.md`);
  var main = 'index'+path.extname(pth);
  var requires = pkgRequires(pth);
  var pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  pkgUpdate(pkg, Object.assign({name, license, readme, index, main, requires}, o));
  var dir = tempy.directory();
  for(var r of requires) {
    if(!/^[\.\/]/.test(r)) continue;
    r = resolve(r);
    var src = path.join(path.dirname(pth), r);
    var dst = path.join(dir, r);
    fs.copyFileSync(src, dst);
  }
  fs.writeFileSync(path.join(dir, 'package.json'), JSON.stringify(pkg, null, 2));
  fs.writeFileSync(path.join(dir, 'LICENSE'), license);
  fs.writeFileSync(path.join(dir, 'README.md'), readme);
  fs.writeFileSync(path.join(dir, main), index);
  cp.execSync('npm publish', {cwd: dir, stdio: STDIO});
  cp.execSync(`rm -rf ${dir}`, {stdio: STDIO});
}

function pkgMinify(o) {
  console.log('pkgMinify:', o);
  cp.execSync(BIN+'browserify index.js -s number -o index.web.js', {stdio: STDIO});
  cp.execSync(BIN+'uglifyjs -c -m -o index.min.js index.web.js', {stdio: STDIO});
  var pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  var license = fs.readFileSync('LICENSE', 'utf8');
  var readme = fs.readFileSync('README.md', 'utf8');
  var index = fs.readFileSync('index.min.js', 'utf8');
  readme = readme.replace(/^> .*?minified.*$/m, '');
  readme = readme.replace(/```/,
    `> This is browserified, minified version of [${PACKAGE}].<br>`+EOL+
    `> It is exported as global variable **${STANDALONE}**.<br>`+EOL+
    `> CDN: [unpkg], [jsDelivr].`+EOL+EOL+
    `[${PACKAGE}]: https://www.npmjs.com/package/${PACKAGE}`+EOL+
    `[unpkg]: https://unpkg.com/${PACKAGE}.min`+EOL+
    `[jsDelivr]: https://cdn.jsdelivr.net/npm/${PACKAGE}.min`+EOL+EOL+
    '```');
  pkg.name += '.min';
  pkg.description = pkg.description.replace('.$', ' (browserified, minifined).');
  pkg.scripts = {test: 'exit'};
  pkg.devDependencies = undefined;
  fs.unlinkSync('index.web.js');
  fs.unlinkSync('index.min.js');
  var dir = tempy.directory();
  fs.writeFileSync(path.join(dir, 'index.js'), index);
  fs.writeFileSync(path.join(dir, 'package.json'), JSON.stringify(pkg, null, 2));
  fs.writeFileSync(path.join(dir, 'LICENSE'), license);
  fs.writeFileSync(path.join(dir, 'README.md'), readme);
  cp.execSync('npm publish', {cwd: dir, stdio: STDIO});
  cp.execSync(`rm -rf ${dir}`, {stdio: STDIO});
}

// Run on shell.
async function main(a) {
  console.log('main:', a);
  console.log({BIN, ORG, PACKAGE});
  var o = {org: PACKAGE};
  for(var f of fs.readdirSync('scripts')) {
    if(path.extname(f)!=='.js') continue;
    if(f.startsWith('_')) continue;
    if(f==='index.js') continue;
    pkgScatter('scripts/'+f, o);
  }
  pkgMinify();
}
if(require.main===module) main(process.argv);
