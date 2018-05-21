// 0. number-aliquotsum (aliquotSum)
function aliquotSum(n) {
  var z = 0;
  for(var i=0, I=Math.abs(n); i<I; i++)
    if(I % i===0) z += i;
  return z;
};
// 1. number-divisorcount (divisorCount)
function divisorCount(n) {
  // 1. count divisors 1-n
  var z = 0;
  for(var i=1, I=Math.abs(n); i<=I; i++)
    if(I % i===0) z++;
  return z;
};
// 2. number-divisors (divisors)
function divisors(n) {
  var z = [];
  for(var i=1, I=Math.abs(n); i<=I; i++)
    if(I % i===0) z.push(i);
  return z;
};
// 3. number-divisorsum (divisorSum)
function divisorSum(n) {
  // 1. sum divisors 1-n
  var z = 0;
  for(var i=1, I=Math.abs(n); i<=I; i++)
    if(I % i===0) z += i;
  return z;
};
// 4. number-fromroman (fromRoman)
const SYM4 = [' ', 'I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
const VAL = [NaN, 1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
function fromRoman(str) {
  var s = SYM4.length-1, z = 0;
  var neg = str.search(/^\s*-/)>=0;
  str = str.replace(/\W/g, '').toUpperCase();
  for(var i=0, I=str.length; i<I; i+=SYM4[s].length) {
    while(s>0 && str.substr(i, SYM4[s].length)!==SYM4[s]) s--;
    z += VAL[s];
  }
  return neg? -z:z;
};
// 5. number-fromscientific (fromScientific)
function fromScientific(str) {
  return parseFloat(toBaseLine23(str.replace(/\s+/g, '').replace(/[Xx×*]10\^?/g, 'e')));
};
// 6. number-is (is)
function is(n) {
  return typeof n==='number';
};
// 7. number-isabundant (isAbundant)
function isAbundant(n) {
  var z = 0;
  for(var i=0, I=Math.abs(n); i<I; i++)
    if(I % i===0) z += i;
  return z>I;
};
// 8. number-iscomposite (isComposite)
function isComposite(n) {
  return !isPrime(n);
};
// 9. number-isdeficient (isDeficient)
function isDeficient(n) {
  var z = 0;
  for(var i=1, I=Math.abs(n); i<I; i++)
    if(I % i===0) z += i;
  return z<I;
};
// 10. number-iseven (isEven)
function isEven(n) {
  return !(n & 1);
};
// 11. number-isnatural (isNatural)
function isNatural(n) {
  return n>0 && Number.isInteger(n);
};
// 12. number-isnegative (isNegative)
function isNegative(n) {
  return n<0;
};
// 13. number-isodd (isOdd)
function isOdd(n) {
  return !!(n & 1);
};
// 14. number-isperfect (isPerfect)
function isPerfect(n) {
  var z = 0;
  for(var i=0, I=Math.abs(n); i<I; i++)
    if(I % i===0) z += i;
  return z===I;
};
// 15. number-ispositive (isPositive)
function isPositive(n) {
  return n>0;
};
// 16. number-isprime (isPrime)
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
// 17. number-iswhole (isWhole)
function isWhole(n) {
  return n>=0 && Number.isInteger(n);
};
// 18. number-roundto (roundTo)
function roundTo(val, pre=1e-12) {
  val = Math.round(val/pre)*pre;
  return Math.round(val*1e+12)*1e-12;
};
// 19. number-toindiansystem (toIndianSystem)
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
// 20. number-toroman (toRoman)
const SYM20 = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
const VAL = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
function toRoman(n) {
  var N = Math.abs(n), z = n<0? '-':'';
  for(var i=SYM20.length-1; i>=0; i--)
    while(N>=VAL[i]) { N -= VAL[i]; z += SYM20[i]; }
  return z;
};
// 21. number-toscientific (toScientific)
function toScientific(n) {
  var e = Math.floor(Math.log10(n)), m = n*Math.pow(10, -e);
  return m+'×10'+toSuperscript24(e.toString());
};
// 22. number-towesternsystem (toWesternSystem)
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
// 23. string-tobaseline (toBaseLine23)
const FSUP23 = '⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻⁼⁽⁾ᵝᵞᵟᶿᶥᵠᵡᴬᴮᴰᴱᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾᴿᵀᵁⱽᵂᶦᶫᶰᶸᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖʳˢᵗᵘᵛʷˣʸᶻ';
const TSUP = '0123456789+-=()βγδθιφχABDEGHIJKLMNOPRTUVWILNUabcdefghijklmnoprstuvwxyz';
const FSUB = '₀₁₂₃₄₅₆₇₈₉₊₋₌₍₎ₔᵦᵧᵨᵩᵪₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓ';
const TSUB = '0123456789+-=()əβγρφχaehijklmnoprstuvx';
function toBaseLine23(str, sup, sub) {
  var s = 0, z = '';
  var sup = sup||[], sub = sub||[];
  var bgn = ['', sup[0]||'', sub[0]||''];
  var end = ['', sup[1]||'', sub[1]||''];
  for(var c of str) {
    var isup = FSUP23.indexOf(c), isub = FSUB.indexOf(c);
    var sn = isup>=0? 1:(isub>=0? 2:0);
    if(sn!==s) z += end[s]+bgn[sn];
    z += TSUP[isup]||TSUB[isub]||c;
    s = sn;
  }
  return z+end[s];
};
// 24. string-tosuperscript (toSuperscript24)
const SYM24 = '        ⁽⁾ ⁺ ⁻  ⁰¹²³⁴⁵⁶⁷⁸⁹   ⁼   ᴬᴮ ᴰᴱ ᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾ ᴿ ᵀᵁ ᵂ         ᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖ ʳˢᵗᵘᵛʷˣʸᶻ     ';
function toSuperscript24(str) {
  var z = '';
  for(var c of str) {
    var d = SYM24[c.charCodeAt()-32]||' ';
    z += d===' '? c:d;
  }
  return z;
};
Array.aliquotSum = aliquotSum;
Array.divisorCount = divisorCount;
Array.divisors = divisors;
Array.divisorSum = divisorSum;
Array.fromRoman = fromRoman;
Array.fromScientific = fromScientific;
Array.is = is;
Array.isAbundant = isAbundant;
Array.isComposite = isComposite;
Array.isDeficient = isDeficient;
Array.isEven = isEven;
Array.isNatural = isNatural;
Array.isNegative = isNegative;
Array.isOdd = isOdd;
Array.isPerfect = isPerfect;
Array.isPositive = isPositive;
Array.isPrime = isPrime;
Array.isWhole = isWhole;
Array.round = roundTo;
Array.toIndianSystem = toIndianSystem;
Array.toRoman = toRoman;
Array.toScientific = toScientific;
Array.toWesternSystem = toWesternSystem;
module.exports = Array;
