function toIndianSystem(n, sep) {
  // 1. check stringified number
  var sep = sep||',', N = n.toString();
  var s = N[0]==='-'? 2:1, d = (N.indexOf('.')+1||N.length+1)-1;
  // 2. get before decimal
  var d3 = d-s<=2? 1:0, i = s+((d-s-1) % 2)+d3, z = N.substr(0, i);
  for(var I=d-3; i<I; i+=2)
    z += sep+N.substr(i, 2);
  if(!d3) z += sep+N.substr(d-3, 3);
  // 3. get after decimal
  if(d<N.length) z += N.substr(d, 4);
  for(var i=d+4, I=N.length; i<I; i+=2)
    z += sep+N.substr(i, 2);
  return z;
};
module.exports = toIndianSystem;
