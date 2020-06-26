/**
 * Rounds down number to specific precision.
 * @param {number} n a number
 * @param {number} pre to precision
 */
function floor(n, pre) {
  return Math.floor(n/pre)*pre;
};
module.exports = floor;
