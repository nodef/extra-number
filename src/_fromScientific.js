import toBaseLine from '@extra-string/to-baseline';

/**
 * Converts scientific notation to number.
 * @param txt scientific notation
 * @returns eg. 1.498*10³ -> 1498
 */
function fromScientific(txt: string): number {
  return parseFloat(toBaseLine(txt.replace(/\s+/g, '').replace(/[Xx×*]10\^?/g, 'e')));
}
export default fromScientific;
