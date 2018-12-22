const toSuperscript = require('@extra-string/to-superscript');
function toScientific(n) {
  var e = Math.floor(Math.log10(n)), m = n*Math.pow(10, -e);
  return m+'×10'+toSuperscript(e.toString());
};
module.exports = toScientific;
