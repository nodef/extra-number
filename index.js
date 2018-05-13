function aliquotSum(n) {
  var z = 0;
  for(var i=0, I=Math.abs(n); i<I; i++)
    if(I % i===0) z += i;
  return z;
};
function divisorCount(n) {
  // 1. count divisors 1-n
  var z = 0;
  for(var i=1, I=Math.abs(n); i<=I; i++)
    if(I % i===0) z++;
  return z;
};
function divisors(n) {
  var z = [];
  for(var i=1, I=Math.abs(n); i<=I; i++)
    if(I % i===0) z.push(i);
  return z;
};
function divisorSum(n) {
  // 1. sum divisors 1-n
  var z = 0;
  for(var i=1, I=Math.abs(n); i<=I; i++)
    if(I % i===0) z += i;
  return z;
};
const SYM4 = [' ', 'I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
const VAL4 = [NaN, 1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
function fromRoman(str) {
  var s = SYM4.length-1, z = 0;
  var neg = str.search(/^\s*-/)>=0;
  str = str.replace(/\W/g, '').toUpperCase();
  for(var i=0, I=str.length; i<I; i+=SYM4[s].length) {
    while(s>0 && str.substr(i, SYM4[s].length)!==SYM4[s]) s--;
    z += VAL4[s];
  }
  return neg? -z:z;
};
function fromScientific(str) {
  return parseFloat(toBaseLine(str.replace(/\s+/g, '').replace(/[Xx×*]10\^?/g, 'e')));
};
function is(n) {
  return typeof n==='number';
};
function isAbundant(n) {
  var z = 0;
  for(var i=0, I=Math.abs(n); i<I; i++)
    if(I % i===0) z += i;
  return z>I;
};
function isComposite(n) {
  return !isPrime(n);
};
function isDeficient(n) {
  var z = 0;
  for(var i=1, I=Math.abs(n); i<I; i++)
    if(I % i===0) z += i;
  return z<I;
};
function isEven(n) {
  return !(n & 1);
};
function isNatural(n) {
  return n>0 && Number.isInteger(n);
};
function isNegative(n) {
  return n<0;
};
function isOdd(n) {
  return !!(n & 1);
};
function isPerfect(n) {
  var z = 0;
  for(var i=0, I=Math.abs(n); i<I; i++)
    if(I % i===0) z += i;
  return z===I;
};
function isPositive(n) {
  return n>0;
};
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
};
function isWhole(n) {
  return n>=0 && Number.isInteger(n);
};
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
};
const SYM19 = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
const VAL19 = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
function toRoman(n) {
  var N = Math.abs(n), z = n<0? '-':'';
  for(var i=SYM19.length-1; i>=0; i--)
    while(N>=VAL19[i]) { N -= VAL19[i]; z += SYM19[i]; }
  return z;
};
function toScientific(n) {
  var e = Math.floor(Math.log10(n)), m = n*Math.pow(10, -e);
  return m+'×10'+toSuperscript(e.toString());
};
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
};
const FSUP22 = '⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻⁼⁽⁾ᵝᵞᵟᶿᶥᵠᵡᴬᴮᴰᴱᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾᴿᵀᵁⱽᵂᶦᶫᶰᶸᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖʳˢᵗᵘᵛʷˣʸᶻ';
const TSUP22 = '0123456789+-=()βγδθιφχABDEGHIJKLMNOPRTUVWILNUabcdefghijklmnoprstuvwxyz';
const FSUB22 = '₀₁₂₃₄₅₆₇₈₉₊₋₌₍₎ₔᵦᵧᵨᵩᵪₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓ';
const TSUB22 = '0123456789+-=()əβγρφχaehijklmnoprstuvx';
function toBaseLine(str, sup, sub) {
  var s = 0, z = '';
  var sup = sup||[], sub = sub||[];
  var bgn = ['', sup[0]||'', sub[0]||''];
  var end = ['', sup[1]||'', sub[1]||''];
  for(var c of str) {
    var isup = FSUP22.indexOf(c), isub = FSUB22.indexOf(c);
    var sn = isup>=0? 1:(isub>=0? 2:0);
    if(sn!==s) z += end[s]+bgn[sn];
    z += TSUP22[isup]||TSUB22[isub]||c;
    s = sn;
  }
  return z+end[s];
};
const SYM23 = '        ⁽⁾ ⁺ ⁻  ⁰¹²³⁴⁵⁶⁷⁸⁹   ⁼   ᴬᴮ ᴰᴱ ᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾ ᴿ ᵀᵁ ᵂ         ᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖ ʳˢᵗᵘᵛʷˣʸᶻ     ';
function toSuperscript(str) {
  var z = '';
  for(var c of str) {
    var d = SYM23[c.charCodeAt()-32]||' ';
    z += d===' '? c:d;
  }
  return z;
};
Number.aliquotSum = aliquotSum;
Number.divisorCount = divisorCount;
Number.divisors = divisors;
Number.divisorSum = divisorSum;
Number.fromRoman = fromRoman;
Number.fromScientific = fromScientific;
Number.is = is;
Number.isAbundant = isAbundant;
Number.isComposite = isComposite;
Number.isDeficient = isDeficient;
Number.isEven = isEven;
Number.isNatural = isNatural;
Number.isNegative = isNegative;
Number.isOdd = isOdd;
Number.isPerfect = isPerfect;
Number.isPositive = isPositive;
Number.isPrime = isPrime;
Number.isWhole = isWhole;
Number.toIndianSystem = toIndianSystem;
Number.toRoman = toRoman;
Number.toScientific = toScientific;
Number.toWesternSystem = toWesternSystem;
module.exports = Number;
