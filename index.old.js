function is(n) {
  return typeof n==='number';
}
function isOdd(n) {
  return Number.isInteger(n)? !!(n & 1) : undefined;
}
function isEven(n) {
  return !(n & 1);
}
function isNegative(n) {
  return n<0;
}
function isNatural(n) {
  return n>0 && Number.isInteger(n);
}
function isWhole(n) {
  return n>=0 && Number.isInteger(n);
}
function isPositive(n) {
  return n>0;
}
function isPrime(n) {
  // 1. get absolute
  var N = Math.abs(n);
  // 2. 2, 3 are prime
  if(N===2 || N===3) return true;
  // 3. factor of 2, 3 => not prime
  if(N % 2===0 || N % 3===0) return false;
  // 4. factor of 6k-1 or 6k+1 => not prime
  for(var i=6, I=Math.sqrt(N)+1; i<=I; i+=6)
    if(N % (i-1)===0 || N % (i+1)===0) return false;
  // 5. no factor, and not 0, 1 => prime
  return N>1;
}
function isComposite(n) {
  return !isPrime(n);
}
function isAbundant(n) {
  var z = 0;
  for(var i=0, I=Math.abs(n); i<I; i++)
    if(I % i===0) z += i;
  return z>I;
}
function isDeficient(n) {
  var z = 0;
  for(var i=1, I=Math.abs(n); i<I; i++)
    if(I % i===0) z += i;
  return z<I;
}
function isPerfect(n) {
  var z = 0;
  for(var i=0, I=Math.abs(n); i<I; i++)
    if(I % i===0) z += i;
  return z===I;
}
function isPerfectSquare(n) {
  return Number.isInteger(Math.sqrt(n));
}
function isPerfectCube(n) {
  return Number.isInteger(Math.cbrt(n));
}
function significantDigits(n) {
  return n.toExponential().replace(/e[\+\-0-9]*$/, '').replace( /^0\.?0*|\./, '').length;
}
const SYM = [' ', 'I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
const VAL = [NaN, 1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
function fromRoman(str) {
  var s = SYM.length-1, z = 0;
  var neg = str.search(/^\s*-/)>=0;
  str = str.replace(/\W/g, '').toUpperCase();
  for(var i=0, I=str.length; i<I; i+=SYM[s].length) {
    while(s>0 && str.substr(i, SYM[s].length)!==SYM[s]) s--;
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
const toBaseline = toBaseLine;
function fromScientific(str) {
  return parseFloat(toBaseline(str.replace(/\s+/g, '').replace(/[Xx×*]10\^?/g, 'e')));
}
const SYM18 = '        ⁽⁾ ⁺ ⁻  ⁰¹²³⁴⁵⁶⁷⁸⁹   ⁼   ᴬᴮ ᴰᴱ ᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾ ᴿ ᵀᵁ ᵂ         ᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖ ʳˢᵗᵘᵛʷˣʸᶻ     ';
function toSuperscript(str) {
  var z = '';
  for(var c of str) {
    var d = SYM18[c.charCodeAt()-32]||' ';
    z += d===' '? c:d;
  }
  return z;
}
function toScientific(n) {
  var e = Math.floor(Math.log10(n)), m = n*Math.pow(10, -e);
  return m+'×10'+toSuperscript(e.toString());
}
function toIndianSystem(n, sep) {
  // 1. check stringified number
  var sep = sep||',', N = n.toString();
  var s = N[0]==='-'? 2:1, d = (N.indexOf('.')+1||N.length+1)-1;
  // 2. get before decimal
  var d3 = d-s<=2? 1:0, i = s+((d-s-1) % 2)+d3, z = N.substr(0, i);
  for(var I=d-3; i<I; i+=2)
    z += sep+N.substr(i, 2);
  if(!d3) z += sep+N.substr(d-3, 3);
  // 3. get after decimal
  if(d<N.length) z += N.substr(d, 4);
  for(var i=d+4, I=N.length; i<I; i+=2)
    z += sep+N.substr(i, 2);
  return z;
}
function toWesternSystem(n, sep) {
  // 1. check stringified number
  var sep = sep||',', N = n.toString();
  var s = N[0]==='-'? 2:1;
  var I = (N.indexOf('.')+1||N.length+1)-1;
  // 2. get before decimal
  var i = s+((I-s) % 3), z = N.substr(0, i);
  for(; i<I; i+=3)
    z += sep+N.substr(i, 3);
  // 3. get after decimal
  if(I<N.length) z += N.substr(I, 4);
  for(var i=I+4, I=N.length; i<I; i+=3)
    z += sep+N.substr(i, 3);
  return z;
}
const SYM22 = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
const VAL22 = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
function toRoman(n) {
  var N = Math.abs(n), z = n<0? '-':'';
  for(var i=SYM22.length-1; i>=0; i--)
    while(N>=VAL22[i]) { N -= VAL22[i]; z += SYM22[i]; }
  return z;
}
function compare(n1, n2) {
  return n1===n2? 0:(n1<n2? -1:1);
}
function roundTo(val, pre=1e-12) {
  var val = Math.round(val/pre)*pre;
  return Math.round(val*1e+12)/1e+12;
}
function aliquotSum(n) {
  var z = 0;
  for(var i=0, I=Math.abs(n); i<I; i++)
    if(I % i===0) z += i;
  return z;
}
function divisors(n) {
  var z = [];
  for(var i=1, I=Math.abs(n); i<=I; i++)
    if(I % i===0) z.push(i);
  return z;
}
function divisorCount(n) {
  // 1. count divisors 1-n
  var z = 0;
  for(var i=1, I=Math.abs(n); i<=I; i++)
    if(I % i===0) z++;
  return z;
}
function divisorSum(n) {
  // 1. sum divisors 1-n
  var z = 0;
  for(var i=1, I=Math.abs(n); i<=I; i++)
    if(I % i===0) z += i;
  return z;
}
// 1. Datatype methods
Number.is = is;

// 2. About methods
Number.isOdd = isOdd;
Number.isEven = isEven;
Number.isNegative = isNegative;
Number.isNatural = isNatural;
Number.isWhole = isWhole;
Number.isPositive = isPositive;
Number.isPrime = isPrime;
Number.isComposite = isComposite;
Number.isAbundant = isAbundant;
Number.isDeficient = isDeficient;
Number.isPerfect = isPerfect;
Number.isPerfectSquare = isPerfectSquare;
Number.isPerfectCube = isPerfectCube;
Number.significantDigits = significantDigits;

// 3. Generate methods
Number.fromRoman = fromRoman;
Number.fromScientific = fromScientific;

// 4. Transform methods
Number.toScientific = toScientific;
Number.toIndianSystem = toIndianSystem;
Number.toWesternSystem = toWesternSystem;
Number.toRoman = toRoman;

// 5. Evaluate methods
Number.compare = compare;
Number.round = roundTo;
Number.aliquotSum = aliquotSum;
Number.divisors = divisors;
Number.divisorCount = divisorCount;
Number.divisorSum = divisorSum;
module.exports = Number;
