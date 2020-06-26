const SYM = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
const VAL = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];

/**
 * Converts number to roman numerals.
 * @param {number} n a number
 * @returns {string} eg. 95 -> XCV
 */
function toRoman(n) {
  var N = Math.abs(n), z = n<0? '-':'';
  for(var i=SYM.length-1; i>=0; i--)
    while(N>=VAL[i]) { N -= VAL[i]; z += SYM[i]; }
  return z;
};
module.exports = toRoman;
