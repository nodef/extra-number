/**
 * Rounds up number to specific precision.
 * @param {number} n a number
 * @param {number} pre to precision (1)
 */
function ceil(n, pre=1) {
  return Math.ceil(n/pre)*pre;
};
module.exports = ceil;
