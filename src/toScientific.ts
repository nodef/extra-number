import toSuperscript from '@extra-string/to-superscript';

/**
 * Converts number to scientific notation.
 * @param x a number
 * @returns eg. 695700000 -> 6.957×10⁸
 */
function toScientific(x: number): string {
  var e = Math.floor(Math.log10(x)), m = x*Math.pow(10, -e);
  return m+'×10'+toSuperscript(e.toString());
}
export default toScientific;
