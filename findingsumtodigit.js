function digiSum(num) {
    var sum = 0;

    while(sum > 9 || num > 0) {
        if (num == 0) {
            sum = 0;
            num = sum;
        }
        sum = sum + num%10;
        num = num/10;
    }
    return sum;
}

var sumResult = digiSum(582);
console.log(sumResult);