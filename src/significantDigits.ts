/**
 * Counts the number of significant digits.
 * @param x a number
 */
function significantDigits(x: number): number {
  var a = x.toExponential();
  return a.replace(/e[\+\-0-9]*$/, '').replace( /^0\.?0*|\./, '').length;
}
export default significantDigits;
