/**
 * Compares 2 numbers.
 * @param {number} n1 first number
 * @param {number} n2 second number
 * @returns {number} -1: n1<n2, 0: n1=n2, 1: n1>n2
 */
function compare(n1, n2) {
  return n1===n2? 0:(n1<n2? -1:1);
}
module.exports = compare;
