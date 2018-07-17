/**
 * Count [aliquot divisors] of [number].
 * {@link https://en.wikipedia.org/wiki/Aliquot_sum|aliquot divisors}
 * @param {number} n Number.
 */
function aliquotCount(n) {
  var z = 1;
  for(var i=2, I=Math.abs(n); i<I; i++)
    if(I % i===0) z ++;
  return z;
};
module.exports = aliquotCount;
