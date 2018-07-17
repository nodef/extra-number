/**
 * Round [number] to specific precision.
 * > Helps to deal with [number precision problems].
 * {@link https://stackoverflow.com/questions/1458633/how-to-deal-with-floating-point-number-precision-in-javascript|number precision problems}
 * @param {number} n Number.
 * @param {number} pre Precision.
 */
function round(n, pre=1e-12) {
  var n = Math.round(n/pre)*pre;
  return Math.round(n*1e+12)/1e+12;
};
module.exports = round;
