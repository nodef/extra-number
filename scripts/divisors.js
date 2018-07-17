/**
 * Get [divisors] of [number].
 * {@link https://en.wikipedia.org/wiki/Divisor|divisors}
 * @param {number} n Number.
 */
function divisors(n) {
  var z = [1];
  for(var i=2, I=Math.abs(n); i<=I; i++)
    if(I % i===0) z.push(i);
  return z;
};
module.exports = divisors;
