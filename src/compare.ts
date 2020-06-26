/**
 * Compares two numbers.
 * @param x a number
 * @param y another number
 * @returns x<y: -1, x=y: 0, x>y: 1
 */
function compare(x: number, y: number): number {
  return x<y? -1 : (x>y? 1 : 0);
}
export default compare;
