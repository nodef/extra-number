function divisorCount(n) {
  // 1. count divisors 1-n
  var z = 0;
  for(var i=1, I=Math.abs(n); i<=I; i++)
    if(I % i===0) z++;
  return z;
};
module.exports = divisorCount;
