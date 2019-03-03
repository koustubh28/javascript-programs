function lcmOfNumbers(num1, num2) {
    var l = num1 > num2 ? num1:num2;
    for(l; l<=num1*num2; l++) {
        console.log(l);
        if(l%num1 == 0 && l%num2 == 0) 
            break;
    }
    return l;
}

var result = lcmOfNumbers(4,6);
console.log("LCM is: " + result);