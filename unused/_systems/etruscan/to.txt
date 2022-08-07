const SYMBOLS = require('./SYMBOLS');
const VALUES = require('./VALUES');

/**
 * Converts number to etruscan numerals.
 * @param {number} n a number
 */
function to(n) {
  var a = n<0? '-':'';
  n = Math.abs(n);
  for(var i=SYMBOLS.length-1; i>0; i--) {
    a += SYMBOLS[i].repeat(Math.floor(n / VALUES[i]));
    n = n % VALUES[i];
  }
  return a;
}
module.exports = to;
