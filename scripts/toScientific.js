const toSuperscript = require('@extra-string/to-superscript');

/**
 * Converts number to scientific notation (text).
 * @param {number} n a number
 */
function toScientific(n) {
  var e = Math.floor(Math.log10(n)), m = n*Math.pow(10, -e);
  return m+'×10'+toSuperscript(e.toString());
};
module.exports = toScientific;
