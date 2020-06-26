/**
 * Rounds up number to specific precision.
 * @param x a number
 * @param pre to precision [1]
 */
function ceil(x: number, pre: number=1): number {
  return Math.ceil(x/pre)*pre;
}
export default ceil;
