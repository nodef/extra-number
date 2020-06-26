/**
 * Checks if value is number.
 * @param v a value
 */
function is(v: any): v is number {
  return typeof v==='number';
}
export default is;
