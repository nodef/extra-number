const package = require('./package.json');
const fs = require('fs');
const os = require('os');

function renameConstants(txt, i) {
  var arr = null, re = /const\s+(\w+)/g;
  while((arr = re.exec(txt))!=null)
    txt = txt.replace(new RegExp(arr[1], 'g'), arr[1]+i);
  return txt;
};

var names = [], z = '', i = 0;
for(var dep in package.devDependencies) {
  var fil = require.resolve(dep);
  var txt = fs.readFileSync(fil, 'utf8');
  if(dep.startsWith('number')) names.push(txt.match(/module\.exports\s*=\s*(\w+)/)[1]);
  z += renameConstants(txt.replace(/.*require\(.*/, '').replace(/module\.exports.*/g, '').trim()+os.EOL, i++);
}
for(var nam of names)
  z += `Number.${nam} = ${nam};${os.EOL}`;
z += `module.exports = Number;${os.EOL}`;
fs.writeFileSync('index.js', z);
