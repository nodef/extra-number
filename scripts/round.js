function roundTo(val, pre=1e-12) {
  var val = Math.round(val/pre)*pre;
  return Math.round(val*1e+12)/1e+12;
};
module.exports = roundTo;
