/**
 * Rounds number to specific precision.
 * @param x a number
 * @param pre to precision (1e-12)
 */
function round(x: number, pre: number=1e-12): number {
  var x = Math.round(x/pre)*pre;
  return Math.round(x*1e+12)/1e+12;
}
export default round;
