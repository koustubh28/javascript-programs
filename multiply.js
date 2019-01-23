function mul(x) {
  return function(y) {
    return function(z) {
      return x*y*z;
    }
  }
}

var storeResult = mul(2)(3)(4);
var storeResult1 = mul(4)(3)(4);
console.log(storeResult);
console.log(storeResult1);
