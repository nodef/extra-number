/**
 * Converts number from one range to another.
 * @param x a number
 * @param u start of source range
 * @param U end of source range
 * @param v start of target range
 * @param V end of target range
 */
function map(x: number, u: number=0, U: number=1, v: number=0, V: number=1): number {
  return v+(x-u)*(V-v)/(U-u);
}
export default map;
