function divisorSum(n) {
  // 1. sum divisors 1-n
  var z = 0;
  for(var i=1, I=Math.abs(n); i<=I; i++)
    if(I % i===0) z += i;
  return z;
};
module.exports = divisorSum;
