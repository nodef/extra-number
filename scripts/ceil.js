/**
 * Rounds up number to specific precision.
 * @param {number} n a number
 * @param {number} pre to precision
 */
function ceil(n, pre) {
  return Math.ceil(n/pre)*pre;
};
module.exports = ceil;
