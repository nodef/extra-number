/**
 * Rounds number to specific precision.
 * @param {number} n a number
 * @param {number} pre to precision (1e-12)
 */
function round(n, pre=1e-12) {
  n = Math.round(n/pre)*pre;
  return Math.round(n*1e+12)/1e+12;
};
module.exports = round;
