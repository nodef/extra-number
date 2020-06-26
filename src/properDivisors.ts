/**
 * Lists all divisors of x, except itself.
 * @param x a number
 * @returns proper divisors (factors)
 */
function properDivisors(x: number): number[] {
  var x = Math.abs(x), a = [];
  for(var i=1; i<x; i++)
    if(x % i===0) a.push(i);
  return a;
}
export default properDivisors;
