const aliquotSum = require('./aliquotSum');

/**
 * Check if [number] is [perfect].
 * {@link https://en.wikipedia.org/wiki/Perfect_number|perfect}
 * @param {number} n Number.
 */
function isPerfect(n) {
  return aliquotSum(n)===n;
};
module.exports = isPerfect;
