const toSuperscript = require('string-tosuperscript');

/**
 * Convert [number] to [scientific notation].
 * {@link https://en.wikipedia.org/wiki/Scientific_notation|scientific notation}
 * @param {number} n Number.
 */
function toScientific(n) {
  var e = Math.floor(Math.log10(n)), m = n*Math.pow(10, -e);
  return m+'×10'+toSuperscript(e.toString());
};
module.exports = toScientific;
