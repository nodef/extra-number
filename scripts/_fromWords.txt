const token = require('./_token');
const number = require('./_number');
const T = token.type;

/**
 * Converts number in words to number.
 * @param {string} txt number in words
 */
function fromWords(txt) {
  var [tok] = number.process(token.parse(txt));
  return tok && tok.type&T.NUMBER===T.NUMBER? tok.value:NaN;
}
module.exports = fromWords;
