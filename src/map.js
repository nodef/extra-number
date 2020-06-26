/**
 * Converts a number from one range to another.
 * @param {number} n a number
 * @param {number} s0 start of source range
 * @param {number} s1 end of source range
 * @param {number} t0 start of target range
 * @param {number} t1 end of target range
 */
function map(n, s0, s1, t0, t1) {
  return t0+(n-s0)*(t1-t0)/(s1-s0);
}
module.exports = map;
