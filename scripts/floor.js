/**
 * Rounds down number to specific precision.
 * @param {number} n a number
 * @param {number} pre to precision (1)
 */
function floor(n, pre=1) {
  return Math.floor(n/pre)*pre;
};
module.exports = floor;
