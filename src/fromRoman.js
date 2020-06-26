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
module.exports = fromRoman;
