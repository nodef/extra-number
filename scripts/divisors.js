function divisors(n) {
  var z = [];
  for(var i=1, I=Math.abs(n); i<=I; i++)
    if(I % i===0) z.push(i);
  return z;
};
module.exports = divisors;
