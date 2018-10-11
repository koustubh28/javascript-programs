function removeDuplicates(num) {
  var i,
      len=num.length,
      out=[],
      obj={};

  for (i=0; i<len; i++) {
    obj[num[i]]=0;
    console.log(obj);
  }
  for (i in obj) {
    out.push(i);
  }
  return out;
}
var Mynum = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
result = removeDuplicates(Mynum);
console.log(Mynum);
console.log(result);
