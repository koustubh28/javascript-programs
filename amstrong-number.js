function isNumberArmstrong(num) {
  var sum = 0, temp, remainder, num;
  temp = num;
  while(temp > 0) {
    remainder = temp % 10;
    temp = parseInt(temp / 10); // convert float into Integer
    sum = sum + remainder * remainder * remainder;
  }
  if(sum == num) {
    console.log( + num + " is an amstrong number");
  } else {
    console.log(+ num + " is not an amstrong number");
  }
}

isNumberArmstrong(371);
isNumberArmstrong(123);
isNumberArmstrong(153);
