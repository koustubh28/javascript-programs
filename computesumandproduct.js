var calculateSumAndProduct = function(array) {
	var sum = 0;
	var product = 1;

	for(var i=0; i<array.length; i++) {
		sum = sum + array[i];
		product = product * array[i];
	}

	return "Sum is: " + sum + " and " + "Product is: " + product;
}

var output = calculateSumAndProduct([1,2,3,4]);
console.log(output);
