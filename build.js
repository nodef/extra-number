const packageLock = require('./package-lock.json')
const package = require('./package.json');
const fs = require('fs');
const os = require('os');


const VARSTART = '(^|[\\s!%&\\(-\\-\\/:-@\\[-\\^\\{-\\~])';
const VARSTOP = '([\\s!%&\\(-\\/:-@\\[-\\^\\{-\\~]|$)';
function renameFunctions(txt, lib, i) {
  var mat = [], re = /function\s+(\w+)/g;
  while((mat=re.exec(txt))!=null) txt = txt.replace(new RegExp(VARSTART+mat[1]+VARSTOP, 'g'), '$1'+mat[1]+i+'$2');
  var exp = txt.match(/module\.exports\s*=\s*(\w+)/)[1];
  exp = lib? exp.substring(0, exp.length-i.toString().length):exp;
  txt = txt.replace(`function ${exp}${i}`, `function ${exp}`);
  txt = txt.replace(new RegExp('module\\.exports\\s*=\\s*(\\w+)'), `module.exports = ${exp}`);
  return txt;
};

function renameRequires(txt) {
  var mat = [], re = /const\s+(\w+)\s*=\s*require\([\'\"](.+?)[\'\"]/g;
  while((mat=re.exec(txt))!=null) txt = txt.replace(new RegExp(VARSTART+mat[1]+VARSTOP, 'g'), '$1'+FUNCTION.get(mat[2])+'$2');
  txt = txt.replace(/\s*const\s+\w+\s*=\s*require\(.*/g, '');
  return txt;
};

function renameConstants(txt, i) {
  var arr = null, re = /const\s+(\w+)/g;
  while((arr = re.exec(txt))!=null)
    txt = txt.replace(new RegExp(arr[1], 'g'), arr[1]+i);
  return txt;
};

var TEXT = new Map();
var FUNCTION = new Map();
var names = [], i = 0;
for(var dep in packageLock.dependencies) {
  var fil = require.resolve(dep);
  var txt = fs.readFileSync(fil, 'utf8');
  var lib = dep in package.devDependencies;
  txt = renameFunctions(txt, lib, i++);
  var exp = txt.match(/module\.exports = (\w+)/)[1];
  txt = txt.replace(/\s*module\.exports.*/g, '');
  if(lib) names.push(exp);
  FUNCTION.set(dep, exp);
  TEXT.set(dep, txt);
}
var z = '', i = 0;
for(var dep in packageLock.dependencies) {
  var txt = TEXT.get(dep);
  txt = renameRequires(txt);
  txt = renameConstants(txt, i++);
  z += txt.trim()+os.EOL;
}
for(var nam of names)
  z += `Number.${nam} = ${nam};${os.EOL}`;
z += `module.exports = Number;${os.EOL}`;
fs.writeFileSync('index.js', z);
