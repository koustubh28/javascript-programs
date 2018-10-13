function splitStringIntoArray(str) {
  if (str.length <=1) {
    console.log('You must enter atleast 5 char length !');
    return 0;
  }
  var newString = str.toUpperCase();
  var arrayOfString = newString.trim().split(" ");
  console.log(arrayOfString);
}

splitStringIntoArray("Ireland is a good country");
