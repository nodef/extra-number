/**
 * Check if [number] is [natural].
 * {@link https://en.wikipedia.org/wiki/Natural_number|natural}
 * @param {number} n Number.
 */
function isNatural(n) {
  return n>0 && Number.isInteger(n);
};
module.exports = isNatural;
