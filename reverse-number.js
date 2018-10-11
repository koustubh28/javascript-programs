function rev_num() {
  var n = 1234;
  var rev = 0, rem;
  while(n > 0) {
    rem = n % 10;
    rev = rev * 10 + rem;
    n = Math.floor(n/10);
  }
  console.log("Reverse of a number is " + rev);
}

rev_num();
