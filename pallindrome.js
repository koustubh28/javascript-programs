function palindromeOfString(str) {
  for(var i=0; i<str.length; i++) {
    var string1 = str[i];
  }
  for(var j=str.length-1; j>=0; j--) {
    var string2 = str[j];
  }
  if (string1 === string2) {
    console.log("String is a palindrome");
  } else {
    console.log("This string is not a palindrome");
  }
}

palindromeOfString('nitin');
palindromeOfString('madam');
palindromeOfString('koustubh');
