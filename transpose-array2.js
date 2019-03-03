var i, j;
var t = [];
var a = [ [1,2,3], [4,5,6], [7,8,9] ];

for(i=0; i<3; i++) {
  t[i] = [];
  for(j=0; j<3; j++) {
    t[i][j] = a[j][i];
    console.log(t[i][j]);
  }
}
