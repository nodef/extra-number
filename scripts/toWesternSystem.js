/**
 * Convert [number] to [Western system].
 * {@link https://en.wikipedia.org/wiki/Indian_numbering_system|Western system}
 * @param {number} n Number.
 * @param {string} [sep=,] Separator.
 */
function toWesternSystem(n, sep=',') {
  // 1. check stringified number
  var N = n.toString();
  var s = N[0]==='-'? 2:1;
  var I = (N.indexOf('.')+1||N.length+1)-1;
  // 2. get before decimal
  var i = s+((I-s) % 3), z = N.substr(0, i);
  for(; i<I; i+=3)
    z += sep+N.substr(i, 3);
  // 3. get after decimal
  if(I<N.length) z += N.substr(I, 4);
  for(var i=I+4, I=N.length; i<I; i+=3)
    z += sep+N.substr(i, 3);
  return z;
};
module.exports = toWesternSystem;
