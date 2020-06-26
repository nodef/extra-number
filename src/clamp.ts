/**
 * Limits number within given range.
 * @param x a number
 * @param v start of target range [0]
 * @param V end of target range [1]
 */
function clamp(x: number, v: number=0, V: number=1): number {
  return Math.min(Math.max(x, v), V);
}
export default clamp;
