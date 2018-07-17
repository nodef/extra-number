const toBaseLine = require('string-tobaseline');

/**
 * Get [number] from [scientific notation].
 * {@link https://en.wikipedia.org/wiki/Scientific_notation|scientific notation}
 * @param {string} str Scientific number.
 */
function fromScientific(str) {
  return parseFloat(toBaseLine(str.replace(/\s+/g, '').replace(/[Xx×*]10\^?/g, 'e')));
};
module.exports = fromScientific;
