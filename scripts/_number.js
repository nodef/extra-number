const token = require('./_token');
const T = token.type;

const DECIMAL = new Set(['dot', 'point', 'decimal']);
const SPECIAL = new Map([
  ['infinity', Infinity],
  ['infinite', Infinity],
  ['inf', Infinity],
  ['∞', Infinity],
  ['not-a-number', NaN],
  ['not-number', NaN],
  ['nan', NaN]
]);
const CARDINAL = new Map([
  ['oh', 0],
  ['nil', 0],
  ['zero', 0],
  ['nought', 0],
  ['naught', 0],
  ['one', 1],
  ['two', 2],
  ['three', 3],
  ['four', 4],
  ['five', 5],
  ['six', 6],
  ['seven', 7],
  ['eight', 8],
  ['nine', 9],
  ['ten', 10],
  ['eleven', 11],
  ['twelve', 12],
  ['thirteen', 13],
  ['fourteen', 14],
  ['fifteen', 15],
  ['sixteen', 16],
  ['seventeen', 17],
  ['eighteen', 18],
  ['nineteen', 19],
  ['twenty', 20],
  ['thirty', 30],
  ['forty', 40],
  ['fifty', 50],
  ['sixty', 60],
  ['seventy', 70],
  ['eighty', 80],
  ['ninety', 90],
  ['hundred', 1e+2],
  ['thousand', 1e+3],
  ['lakh', 1e+5],
  ['million', 1e+6],
  ['crore', 1e+7],
  ['billion', 1e+9],
  ['trillion', 1e+12],
  ['quadrillion', 1e+15],
  ['quintillion', 1e+18],
  ['sextillion', 1e+21],
  ['septillion', 1e+24],
  ['octillion', 1e+27],
  ['nonillion', 1e+30],
  ['decillion', 1e+33]
]);
const ORDINAL = new Map([
  ['zeroth', 0],
  ['first', 1],
  ['half', 2],
  ['second', 2],
  ['third', 3],
  ['quarter', 4],
  ['fourth', 4],
  ['fifth', 5],
  ['sixth', 6],
  ['seventh', 7],
  ['eighth', 8],
  ['ninth', 9],
  ['tenth', 10],
  ['eleventh', 11],
  ['twelfth', 12],
  ['thirteenth', 13],
  ['fourteenth', 14],
  ['fifteenth', 15],
  ['sixteenth', 16],
  ['seventeenth', 17],
  ['eighteenth', 18],
  ['nineteenth', 19],
  ['twentieth', 20],
  ['thirtieth', 30],
  ['fortieth', 40],
  ['fiftieth', 50],
  ['sixtieth', 60],
  ['seventieth', 70],
  ['eightieth', 80],
  ['ninetieth', 90],
  ['hundredth', 1e+2],
  ['thousandth', 1e+3],
  ['lakhth', 1e+5],
  ['millionth', 1e+6],
  ['croreth', 1e+7],
  ['billionth', 1e+9],
  ['trillionth', 1e+12],
  ['quadrillionth', 1e+15],
  ['quintillionth', 1e+18],
  ['sextillionth', 1e+21],
  ['septillionth', 1e+24],
  ['octillionth', 1e+27],
  ['nonillionth', 1e+30],
  ['decillionth', 1e+33]
]);

function log10(num) {
  return num<1? 0:Math.floor(Math.log10(num));
};
function stateFuse(s, i=s.length) {
  if(s[i-2]<=s[i-4]) s[i-6] += s[i-3];
  else { s[i-6] = s[i-6]*(10**s[i-2])+s[i-3]; s[i-5] += s[i-2]; }
  s[i-4] = s[i-2];
};
function stateValue(s, pre=NaN) {
  if(s.length===0) return Number.isNaN(pre)? 0:pre;
  for(var i=s.length; i>3; i-=3) stateFuse(s, i);
  return Number.isNaN(pre)? s[i-3]:pre+s[i-3]*(10**-s[i-2]);
};
function stateAdd(s, num) {
  var i = s.length, len = log10(num)+1, spc = num<20? 0:len-1;
  if(i===0 || num<100) return s.push(num, len, spc);
  for(; i>3 && s[i-2]+spc>s[i-4]; i-=3) stateFuse(s, i);
  s[i-3] *= num; s[i-2] += spc; s[i-1] += spc;
  s.length = i;
};
function stateAddOrdinal(s, num) {
  var val = stateValue(s);
  if(val>=20) return stateAdd(s, num);
  s.length = 0; s.push(val/num, 1, 0);
};

function process(tkns) {
  var z = [], s = [], pre = NaN;
  var val = false, brk = null;
  for(var tkn of tkns) {
    var txt = (tkn.type&0xF0)===T.TEXT? tkn.value.replace(/[\s,]/g, '').toLowerCase():null;
    if(val && (txt==null || brk!=null)) {
      z.push(token(T.CARDINAL, stateValue(s, pre)));
      s.length = 0; pre = NaN, val = false;
    }
    if(brk!=null && brk.type>0) z.push(brk);
    brk = null;
    if(txt==null) { z.push(tkn); continue; }
    if(SPECIAL.has(txt)) { brk = token(T.CARDINAL, SPECIAL.get(txt)); continue; }
    if(ORDINAL.has(txt)) { stateAddOrdinal(s, ORDINAL.get(txt)); val = true; brk = token(); continue; }
    if(DECIMAL.has(txt)) { pre = stateValue(s); s.length = 0; continue; }
    if(CARDINAL.has(txt)) { stateAdd(s, CARDINAL.get(txt)); val = true; continue; }
    if(isNaN(txt)) { brk = tkn; continue; }
    brk = token(T.CARDINAL, parseFloat(txt));
  }
  if(val) z.push(token(T.CARDINAL, stateValue(s, pre)));
  if(brk!=null && brk.type>0) z.push(brk);
  return z;
};

function number(txt) {
  return token.toString(process(token.parse(txt)));
};
number.process = process;
module.exports = number;
