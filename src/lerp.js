/**
 * Gives a number based on weight, within given range.
 * @param {number} s0 start of range
 * @param {number} s1 end of range
 * @param {number} w weight (0->1)
 */
function lerp(s0, s1, w) {
  return s0+(s1-s0)*w;
}
module.exports = lerp;
