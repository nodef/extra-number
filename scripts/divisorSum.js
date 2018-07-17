/**
 * Sum [divisors] of [number].
 * {@link https://en.wikipedia.org/wiki/Divisor|divisor}
 * @param {number} n Number.
 */
function divisorSum(n) {
  var z = 0;
  for(var i=1, I=Math.abs(n); i<=I; i++)
    if(I % i===0) z += i;
  return z;
};
module.exports = divisorSum;
