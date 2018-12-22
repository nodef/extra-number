const toBaseLine = require('string-tobaseline');
function fromScientific(str) {
  return parseFloat(toBaseLine(str.replace(/\s+/g, '').replace(/[Xx×*]10\^?/g, 'e')));
};
module.exports = fromScientific;
