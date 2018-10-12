function calculateFactorial(number) {
  if (number == 0) {
    return 1;
  }
  return number * calculateFactorial(number-1);
}

console.log(calculateFactorial(5));
