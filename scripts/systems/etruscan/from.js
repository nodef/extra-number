const SYMBOLS = require('./SYMBOLS');
const VALUES = require('./VALUES');

/**
 * Converts etruscan numerals to number.
 * @param {string} x etruscan numerals
 */
function from(x) {
  var neg = x.startsWith('-');
  for(var i=neg? 1:0, I=x.length; i<I; i++) {
    var s = SYMBOLS.indexOf(x[i].toUpperCase());
    if(s<0) break;
    a += VALUES[s];
  }
  return a>0? a:NaN;
}
module.exports = from;
