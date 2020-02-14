/**
 * Gives a list of numbers that n is divisible by, except itself.
 * @param {number} n a number
 * @returns {Array<number>} proper divisors (factors)
 */
function properDivisors(n) {
  var z = [];
  for(var i=1, I=Math.abs(n); i<I; i++)
    if(I % i===0) z.push(i);
  return z;
}
module.exports = properDivisors;
