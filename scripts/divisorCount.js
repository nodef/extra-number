const aliquotCount = require('./aliquotCount');

/**
 * Count [divisors] of [number].
 * {@link https://en.wikipedia.org/wiki/Divisor|divisors}
 * @param {number} n Number.
 */
function divisorCount(n) {
  return aliquotCount(n)+(n>1? 1:0);
};
module.exports = divisorCount;
