/**
 * Check if [number] is [prime].
 * {@link https://en.wikipedia.org/wiki/Prime_number|prime}
 * @param {number} n Number.
 */
function isPrime(n) {
  // 1. get absolute
  var N = Math.abs(n);
  // 2. 2, 3 are prime
  if(N===2 || N===3) return true;
  // 3. factor of 2, 3 => not prime
  if(N % 2===0 || N % 3===0) return false;
  // 4. factor of 6k-1 or 6k+1 => not prime
  for(var i=6, I=Math.sqrt(N)+1; i<=I; i+=6)
    if(N % (i-1)===0 || N % (i+1)===0) return false;
  // 5. no factor, and not 0, 1 => prime
  return N>1;
};
module.exports = isPrime;
