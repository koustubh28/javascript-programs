function digiSum(num) {
    var sum = 0;
    while(num > 0) {
        sum = sum + num%10;
        num = Math.trunc(num/10);
    }

    if (sum > 9) {
        sum = digiSum(sum);
    }

    return sum;
}

var sumResult = digiSum(2234);
console.log(sumResult);