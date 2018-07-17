const isPrime = require('./isPrime');

/**
 * Check if [number] is [composite].
 * {@link https://en.wikipedia.org/wiki/Composite_number|composite}
 * @param {number} n Number.
 */
function isComposite(n) {
  return !isPrime(n);
};
module.exports = isComposite;
