const aliquotSum = require('./aliquotSum');

/**
 * Check if [number] is [abundant].
 * {@link https://en.wikipedia.org/wiki/Abundant_number|abundant}
 * @param {number} n Number.
 */
function isAbundant(n) {
  return aliquotSum(n)>n;
};
module.exports = isAbundant;
