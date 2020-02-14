/**
 * Checks if a number is prime.
 * @param {number} n a number
 */
function isPrime(n) {
  n = Math.abs(n);
  // 2, 3 are prime
  if(n<=3) return n>1;
  // multiples of 2, 3 not prime
  if(n % 2===0 || n % 3===0) return false;
  // factor of 6k-1 or 6k+1 => not prime
  for(var i=6, I=Math.sqrt(n)+1; i<=I; i+=6)
    if(n % (i-1)===0 || n % (i+1)===0) return false;
  return true;
}
module.exports = isPrime;
