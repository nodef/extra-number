const toBaseline = require('@extra-string/to-baseline');
function fromScientific(str) {
  return parseFloat(toBaseline(str.replace(/\s+/g, '').replace(/[Xx×*]10\^?/g, 'e')));
};
module.exports = fromScientific;
