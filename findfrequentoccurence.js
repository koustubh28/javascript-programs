	var films = ["Stree","Nun","Stree","Gold","Stree","Satyamev Jayate"];
	var counts = {};
	var compare = 0;
	var mostFrequent;
	(function(array) {
		for(var i=0; i<array.length; i++) {
			var word = array[i];
			console.log(word);

			if (counts[word] === undefined) {
				counts[word] = 1;
			} else {
					counts[word] = counts[word] + 1;
				}

				if (counts[word] > compare) {
					compare = counts[word];
					mostFrequent = array[i];
				}
			}

			console.log(counts);
			console.log(mostFrequent+ " occurs " +compare + " times");
			return mostFrequent;

		})(films);
