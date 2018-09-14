var array = [ [1,2,3,4], [5,6,3,2], [0,7,8,5], [4,8,5,5], [12,11,4,5] ];

for (var i in array) {
	console.log("Row " + i);

	for (var j in array[i]) {
		console.log(array[i][j]);
	}
}