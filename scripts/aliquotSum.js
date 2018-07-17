/**
 * Get [aliquot sum] of [number].
 * {@link https://en.wikipedia.org/wiki/Aliquot_sum|aliquot sum}
 * @param {number} n Number.
 */
function aliquotSum(n) {
  var z = 1;
  for(var i=2, I=Math.abs(n); i<I; i++)
    if(I % i===0) z += i;
  return z;
};
module.exports = aliquotSum;
