const SYM = [' ', 'I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
const VAL = [NaN, 1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];

/**
 * Get [number] from [roman numerals].
 * {@link https://en.wikipedia.org/wiki/Roman_numerals|roman numerals}
 * @param {string} str Roman number.
 */
function fromRoman(str) {
  var s = SYM.length-1, z = 0;
  var neg = str.search(/^\s*-/)>=0;
  str = str.replace(/\W/g, '').toUpperCase();
  for(var i=0, I=str.length; i<I; i+=SYM[s].length) {
    while(s>0 && str.substr(i, SYM[s].length)!==SYM[s]) s--;
    z += VAL[s];
  }
  return neg? -z:z;
};
module.exports = fromRoman;
