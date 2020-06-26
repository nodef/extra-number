/**
 * Rounds down number to specific precision.
 * @param x a number
 * @param pre to precision (1)
 */
function floor(x: number, pre: number=1): number {
  return Math.floor(x/pre)*pre;
}
export default floor;
