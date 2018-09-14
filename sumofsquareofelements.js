var calculateSumOfSquare = function(array) {
	var sum = 0;

	for(var i=0; i<array.length; i++) {
		sum = sum + Math.pow(array[i], 2);
	}

	return sum;
}

console.log(calculateSumOfSquare([0,1,2,3,4]));