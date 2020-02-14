const toBaseLine = require('@extra-string/to-baseline');

/**
 * Converts scientific notation to number.
 * @param {string} txt scientific notation
 * @returns {number} eg. 1.498*10³ -> 1498
 */
function fromScientific(txt) {
  return parseFloat(toBaseLine(txt.replace(/\s+/g, '').replace(/[Xx×*]10\^?/g, 'e')));
};
module.exports = fromScientific;
