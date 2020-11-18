/* 
Write a function to check if given number is special: 
●	Special numbers are divisible by all of their digits without remainder
●	Receives a number and check whether it is a special number
●	Print "{num} is special" if the number is special
●	Otherwise, print "{num} is not special"
Example
Input	Output
23	    23 is not special
204	    204 is special
 */

function main(number) {
	let isSpecial = true;
	let digitChecker = number;
	while (digitChecker != 0) {
		let digitVal = digitChecker % 10; //%10 to get out our digits
		if (digitVal != 0 && number % digitVal !== 0) {
			// our number % its digit if thats even then were good if not not special
			isSpecial = false;
			break;
		}
		digitChecker = Math.floor(digitChecker / 10);
	}

	if (isSpecial) {
		console.log(`${number} is special`);
	} else {
		console.log(`${number} is not special`);
	}
}

main(23);

main(204);
