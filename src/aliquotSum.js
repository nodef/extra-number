/**
 * Gives sum of all proper divisors of n.
 * @param {number} n a number
 */
function aliquotSum(n) {
  var z = 0;
  for(var i=0, I=Math.abs(n); i<I; i++)
    if(I % i===0) z += i;
  return z;
}
module.exports = aliquotSum;
