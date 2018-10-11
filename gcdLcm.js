
			let number1, number2, gcd, lcm, remainder, numerator, denominator;

			function calculateGcdLcm(number1, number2) {

				if (number1 > number2) {
					numerator = number1;
					denominator = number2;
				} else {
					numerator = number2;
					denominator = number1;
				}

				remainder = numerator % denominator;

				while (remainder !== 0) {
					numerator = denominator;
					denominator = remainder;
					remainder = numerator % denominator;
				}

				gcd = denominator;
				lcm = (number1 * number2)/gcd;

				console.log("The GCD and LCM of two numbers are: " +gcd + ' and ' +lcm);
			}

			calculateGcdLcm(8, 12);

			calculateGcdLcm(18, 16);
