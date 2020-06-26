/**
 * Limits a number within given range.
 * @param {number} n a number
 * @param {number} t0 start of target range
 * @param {number} t1 end of target range
 */
function clamp(n, t0, t1) {
  return Math.min(Math.max(n, t0), t1);
}
module.exports = clamp;
