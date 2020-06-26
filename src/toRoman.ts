const SYM = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
const VAL = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];

/**
 * Converts number to roman numerals.
 * @param x a number
 * @returns eg. 95 -> XCV
 */
function toRoman(x: number): string {
  var a = x<0? '-':'', x = Math.abs(x);
  for(var i=SYM.length-1; i>=0; i--)
    while(x>=VAL[i]) { x -= VAL[i]; a += SYM[i]; }
  return a;
}
export default toRoman;
