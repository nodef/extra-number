const aliquotSum = require('./aliquotSum');

/**
 * Check if [number] is [deficient].
 * {@link https://en.wikipedia.org/wiki/Deficient_number|deficient}
 * @param {number} n Number.
 */
function isDeficient(n) {
  return aliquotSum(n)<n;
};
module.exports = isDeficient;
