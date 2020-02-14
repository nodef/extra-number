const toSuperscript = require('@extra-string/to-superscript');

/**
 * Converts number to scientific notation.
 * @param {number} n a number
 * @returns {string} eg. 695700000 -> 6.957×10⁸
 */
function toScientific(n) {
  var e = Math.floor(Math.log10(n)), m = n*Math.pow(10, -e);
  return m+'×10'+toSuperscript(e.toString());
};
module.exports = toScientific;
