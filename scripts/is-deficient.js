function isDeficient(n) {
  var z = 0;
  for(var i=1, I=Math.abs(n); i<I; i++)
    if(I % i===0) z += i;
  return z<I;
};
module.exports = isDeficient;
