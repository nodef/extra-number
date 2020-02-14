const toBaseLine = require('@extra-string/to-baseline');

/**
 * Converts scientific number (text) to number.
 * @param {string} txt scientific number
 */
function fromScientific(txt) {
  return parseFloat(toBaseLine(txt.replace(/\s+/g, '').replace(/[Xx×*]10\^?/g, 'e')));
};
module.exports = fromScientific;
