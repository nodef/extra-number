/**
 * Sums all proper divisors, of number.
 * @param x a number
 */
function aliquotSum(x: number): number {
  var x = Math.abs(x), a = 0;
  for(var i=0; i<x; i++)
    if(x % i===0) a += i;
  return a;
}
export default aliquotSum;
