const isPrime = require('number-isprime');
function isComposite(n) {
  return !isPrime(n);
};
module.exports = isComposite;
