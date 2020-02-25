/**
 * Checks if value is a number.
 * @param {*} x a value
 */
function is(x) {
  return typeof x==='number';
}
/**
 * Checks if a number is prime.
 * @param {number} n a number
 */
function isPrime(n) {
  n = Math.abs(n);
  // 2, 3 are prime
  if(n<=3) return n>1;
  // multiples of 2, 3 not prime
  if(n % 2===0 || n % 3===0) return false;
  // factor of 6k-1 or 6k+1 => not prime
  for(var i=6, I=Math.sqrt(n)+1; i<=I; i+=6)
    if(n % (i-1)===0 || n % (i+1)===0) return false;
  return true;
}
/**
 * Compares 2 numbers.
 * @param {number} n1 first number
 * @param {number} n2 second number
 * @returns {number} -1: n1<n2, 0: n1=n2, 1: n1>n2
 */
function compare(n1, n2) {
  return n1===n2? 0:(n1<n2? -1:1);
}
/**
 * Rounds number to specific precision.
 * @param {number} n a number
 * @param {number} pre to precision (1e-12)
 */
function round(n, pre=1e-12) {
  n = Math.round(n/pre)*pre;
  return Math.round(n*1e+12)/1e+12;
}
/**
 * Gives sum of all proper divisors of n.
 * @param {number} n a number
 */
function aliquotSum(n) {
  var z = 0;
  for(var i=0, I=Math.abs(n); i<I; i++)
    if(I % i===0) z += i;
  return z;
}
/**
 * Gives a list of numbers that n is divisible by, except itself.
 * @param {number} n a number
 * @returns {Array<number>} proper divisors (factors)
 */
function properDivisors(n) {
  var z = [];
  for(var i=1, I=Math.abs(n); i<I; i++)
    if(I % i===0) z.push(i);
  return z;
}
/**
 * Counts the number of significant digits of a number.
 * @param {number} n a number
 */
function significantDigits(n) {
  return n.toExponential().replace(/e[\+\-0-9]*$/, '').replace( /^0\.?0*|\./, '').length;
}
function token(type=0, value=null, hint=null) {
  return {type, value, hint};
}
const TYPE = {
  NONE: 0x00|0,
  TEXT: 0x10|0,
  NORMAL: 0x11|0,
  QUOTED: 0x12|0,
  NUMBER: 0x20|0,
  CARDINAL: 0x21|0,
  ORDINAL: 0x22|0,
  UNIT: 0x30|0,
  MASS: 0x31|0,
  ENTITY: 0x40|0,
  TABLE: 0x41|0,
  COLUMN: 0x42|0,
  ROW: 0x43|0,
  BRACKET: 0x50|0,
  OPEN: 0x51|0,
  CLOSE: 0x52|0,
  SEPARATOR: 0x60|0,
  OPERATOR: 0x70|0,
  UNARY: 0x71|0,
  BINARY: 0x72|0,
  TERNARY: 0x73|0,
  FUNCTION: 0x80|0,
  KEYWORD: 0x90|0,
  EXPRESSION: 0xA0|0,
  VALUE: 0xA1|0,
  BOOLEAN: 0xA2|0,
};
const T = TYPE;

function parse(txt) {
  var quo = null, y = '', z = [];
  for(var c of txt) {
    if((quo!=null && quo!=c) || /\w/.test(c)) { y += c; continue; }
    if(y) { z.push(token(quo!=null? T.QUOTED:T.TEXT, y)); y = ''; }
    if(/[\'\"\`]/.test(c)) quo = quo==null? c:null;
    else if(/\S/g.test(c)) z.push(token(T.TEXT, c));
  }
  if(y) z.push(token(quo!=null? T.QUOTED:T.TEXT, y));
  return z;
}

function toString(tkns) {
  var z = '';
  for(var tkn of tkns)
    z += tkn.value+' ';
  return z.trim();
}

token.type = TYPE;
token.parse = parse;
token.toString = toString;
const T8 = token.type;

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
}
function stateFuse(s, i=s.length) {
  if(s[i-2]<=s[i-4]) s[i-6] += s[i-3];
  else { s[i-6] = s[i-6]*(10**s[i-2])+s[i-3]; s[i-5] += s[i-2]; }
  s[i-4] = s[i-2];
}
function stateValue(s, pre=NaN) {
  if(s.length===0) return Number.isNaN(pre)? 0:pre;
  for(var i=s.length; i>3; i-=3) stateFuse(s, i);
  return Number.isNaN(pre)? s[i-3]:pre+s[i-3]*(10**-s[i-2]);
}
function stateAdd(s, num) {
  var i = s.length, len = log10(num)+1, spc = num<20? 0:len-1;
  if(i===0 || num<100) return s.push(num, len, spc);
  for(; i>3 && s[i-2]+spc>s[i-4]; i-=3) stateFuse(s, i);
  s[i-3] *= num; s[i-2] += spc; s[i-1] += spc;
  s.length = i;
}
function stateAddOrdinal(s, num) {
  var val = stateValue(s);
  if(val>=20) return stateAdd(s, num);
  s.length = 0; s.push(val/num, 1, 0);
}

function process(tkns) {
  var z = [], s = [], pre = NaN;
  var val = false, brk = null;
  for(var tkn of tkns) {
    var txt = (tkn.type&0xF0)===T8.TEXT? tkn.value.replace(/[\s,]/g, '').toLowerCase():null;
    if(val && (txt==null || brk!=null)) {
      z.push(token(T8.CARDINAL, stateValue(s, pre)));
      s.length = 0; pre = NaN, val = false;
    }
    if(brk!=null && brk.type>0) z.push(brk);
    brk = null;
    if(txt==null) { z.push(tkn); continue; }
    if(SPECIAL.has(txt)) { brk = token(T8.CARDINAL, SPECIAL.get(txt)); continue; }
    if(ORDINAL.has(txt)) { stateAddOrdinal(s, ORDINAL.get(txt)); val = true; brk = token(); continue; }
    if(DECIMAL.has(txt)) { pre = stateValue(s); s.length = 0; continue; }
    if(CARDINAL.has(txt)) { stateAdd(s, CARDINAL.get(txt)); val = true; continue; }
    if(isNaN(txt)) { brk = tkn; continue; }
    brk = token(T8.CARDINAL, parseFloat(txt));
  }
  if(val) z.push(token(T8.CARDINAL, stateValue(s, pre)));
  if(brk!=null && brk.type>0) z.push(brk);
  return z;
}

function number(txt) {
  return token.toString(process(token.parse(txt)));
}
number.process = process;
const T9 = token.type;

/**
 * Converts number in words to number.
 * @param {string} txt number in words
 */
function fromWords(txt) {
  var [tok] = number.process(token.parse(txt));
  return tok && tok.type&T9.NUMBER===T9.NUMBER? tok.value:NaN;
}
const SYM = [' ', 'I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
const VAL = [NaN, 1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];

/**
 * Converts roman numerals to number.
 * @param {string} txt roman numerals
 * @returns {number} eg. XCV -> 95
 */
function fromRoman(txt) {
  var s = SYM.length-1, z = 0;
  var neg = txt.search(/^\s*-/)>=0;
  txt = txt.replace(/\W/g, '').toUpperCase();
  for(var i=0, I=txt.length; i<I; i+=SYM[s].length) {
    while(s>0 && txt.substr(i, SYM[s].length)!==SYM[s]) s--;
    z += VAL[s];
  }
  return neg? -z:z;
}
const SYM11 = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
const VAL11 = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];

/**
 * Converts number to roman numerals.
 * @param {number} n a number
 * @returns {string} eg. 95 -> XCV
 */
function toRoman(n) {
  var N = Math.abs(n), z = n<0? '-':'';
  for(var i=SYM11.length-1; i>=0; i--)
    while(N>=VAL11[i]) { N -= VAL11[i]; z += SYM11[i]; }
  return z;
}
const FSUP = '⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻⁼⁽⁾ᵝᵞᵟᶿᶥᵠᵡᴬᴮᴰᴱᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾᴿᵀᵁⱽᵂᶦᶫᶰᶸᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖʳˢᵗᵘᵛʷˣʸᶻ';
const TSUP = '0123456789+-=()βγδθιφχABDEGHIJKLMNOPRTUVWILNUabcdefghijklmnoprstuvwxyz';
const FSUB = '₀₁₂₃₄₅₆₇₈₉₊₋₌₍₎ₔᵦᵧᵨᵩᵪₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓ';
const TSUB = '0123456789+-=()əβγρφχaehijklmnoprstuvx';
function toBaseLine(str, sup, sub) {
  var s = 0, z = '';
  var sup = sup||[], sub = sub||[];
  var bgn = ['', sup[0]||'', sub[0]||''];
  var end = ['', sup[1]||'', sub[1]||''];
  for(var c of str) {
    var isup = FSUP.indexOf(c), isub = FSUB.indexOf(c);
    var sn = isup>=0? 1:(isub>=0? 2:0);
    if(sn!==s) z += end[s]+bgn[sn];
    z += TSUP[isup]||TSUB[isub]||c;
    s = sn;
  }
  return z+end[s];
}
/**
 * Converts scientific notation to number.
 * @param {string} txt scientific notation
 * @returns {number} eg. 1.498*10³ -> 1498
 */
function fromScientific(txt) {
  return parseFloat(toBaseLine(txt.replace(/\s+/g, '').replace(/[Xx×*]10\^?/g, 'e')));
}
const SYM14 = '        ⁽⁾ ⁺ ⁻  ⁰¹²³⁴⁵⁶⁷⁸⁹   ⁼   ᴬᴮ ᴰᴱ ᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾ ᴿ ᵀᵁ ᵂ         ᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖ ʳˢᵗᵘᵛʷˣʸᶻ     ';
function toSuperscript(str) {
  var z = '';
  for(var c of str) {
    var d = SYM14[c.charCodeAt()-32]||' ';
    z += d===' '? c:d;
  }
  return z;
}
/**
 * Converts number to scientific notation.
 * @param {number} n a number
 * @returns {string} eg. 695700000 -> 6.957×10⁸
 */
function toScientific(n) {
  var e = Math.floor(Math.log10(n)), m = n*Math.pow(10, -e);
  return m+'×10'+toSuperscript(e.toString());
}
exports.is = is;
exports.isPrime = isPrime;
exports.compare = compare;
exports.round = round;
exports.aliquotSum = aliquotSum;
exports.properDivisors = properDivisors;
exports.significantDigits = significantDigits;
exports.fromWords = fromWords;
exports.fromRoman = fromRoman;
exports.toRoman = toRoman;
exports.fromScientific = fromScientific;
exports.toScientific = toScientific;
// exports.toIndianSystem = require('./to-indian-system');
// exports.toWesternSystem = require('./to-western-system');
