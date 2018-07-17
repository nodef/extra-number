const aliquotSum = require('./aliquotSum');

/**
 * Sum [divisors] of [number].
 * {@link https://en.wikipedia.org/wiki/Divisor|divisor}
 * @param {number} n Number.
 */
function divisorSum(n) {
  return aliquotSum(n)+n;
};
module.exports = divisorSum;
