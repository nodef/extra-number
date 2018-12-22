const isPrime = require('./is-prime');
function isComposite(n) {
  return !isPrime(n);
};
module.exports = isComposite;
