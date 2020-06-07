function prevPow(x, n) {
  var lx = Math.log(x)/Math.log(n);
  return Math.pow(Math.floor(lx), n);
}
module.exports = prevPow;
