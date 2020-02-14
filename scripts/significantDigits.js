/**
 * Counts the number of significant digits of a number.
 * @param {number} n a number
 */
function significantDigits(n) {
  return n.toExponential().replace(/e[\+\-0-9]*$/, '').replace( /^0\.?0*|\./, '').length;
};
module.exports = significantDigits;
