function isOdd(n) {
  return Number.isInteger(n)? !!(n & 1) : undefined;
};
module.exports = isOdd;
