/**
 * Check if [number] is [whole].
 * {@link https://en.wikipedia.org/wiki/Natural_number|whole}
 * @param {number} n Number.
 */
function isWhole(n) {
  return n>=0 && Number.isInteger(n);
};
module.exports = isWhole;
