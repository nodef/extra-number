function nextPow(x, n) {
  var lx = Math.log(x)/Math.log(n);
  return Math.pow(Math.ceil(lx), n);
}
module.exports = nextPow;
