function digiSum(num) {
    var sum = 0;

    while(sum > 9 || num > 0) {
        sum = sum + num%10;
        num = num/10;
    }
    return sum;
}

var sumResult = digiSum(12345);
console.log(sumResult);