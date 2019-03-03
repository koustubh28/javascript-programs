function digiSum(num) {
    var sum = 0;
    while(num > 0) {
        sum = sum + num%10;
        num = Math.trunc(num/10);
    }

    if (sum > 9) {
        sum = digiSum(sum);
    }

    console.log("Sum Reduced to: " + sum);
}

digiSum(2234);
digiSum(1234);
digiSum(45632);
digiSum(456387);