/**
 * Gives number based on weight, within given range.
 * @param x weight (0->1)
 * @param v start of range [0]
 * @param V end of range [1]
 */
function lerp(x: number, v: number=0, V: number=1): number {
  return v+(V-v)*x;
}
export default lerp;
