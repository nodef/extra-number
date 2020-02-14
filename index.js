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
const SYM10 = '        ⁽⁾ ⁺ ⁻  ⁰¹²³⁴⁵⁶⁷⁸⁹   ⁼   ᴬᴮ ᴰᴱ ᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾ ᴿ ᵀᵁ ᵂ         ᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖ ʳˢᵗᵘᵛʷˣʸᶻ     ';
function toSuperscript(str) {
  var z = '';
  for(var c of str) {
    var d = SYM10[c.charCodeAt()-32]||' ';
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
const SYM12 = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
const VAL12 = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];

/**
 * Converts number to roman numerals.
 * @param {number} n a number
 * @returns {string} eg. 95 -> XCV
 */
function toRoman(n) {
  var N = Math.abs(n), z = n<0? '-':'';
  for(var i=SYM12.length-1; i>=0; i--)
    while(N>=VAL12[i]) { N -= VAL12[i]; z += SYM12[i]; }
  return z;
}
exports.is = is;
exports.isPrime = isPrime;
exports.compare = compare;
exports.round = round;
exports.aliquotSum = aliquotSum;
exports.properDivisors = properDivisors;
exports.significantDigits = significantDigits;
exports.fromRoman = fromRoman;
exports.fromScientific = fromScientific;
exports.toScientific = toScientific;
exports.toRoman = toRoman;
// exports.toIndianSystem = require('./to-indian-system');
// exports.toWesternSystem = require('./to-western-system');
