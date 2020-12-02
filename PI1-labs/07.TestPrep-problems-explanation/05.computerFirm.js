// Write a program that calculates the average rating and possible sales for a certain number of computers.
// First, a number is entered from the console, which is the number of computers.
//  Then, one number is entered consecutively for each computer:
// ● The last digit of this number represents the rating. It will be in the range [2…6].
// ● The remaining figures represent possible sales.
// The computer sale is scaled based on a rating:
// ● Rating 2 takes 0% of possible sales.
// ● Rating 3 takes 50% of possible sales.
// ● Rating 4 takes 70% of possible sales.
// ● Rating 5 takes 85% of possible sales.
// ● Rating 6 takes 100% of possible sales.
// Input
// You must read from the console:
// On the first line:
// ● n - Number of computers - integer in the range [1…10]
// On the next n lines:
// ● The number representing sales and rating - an integer in the range [32…306]
// Output
// You must print on the console 2 lines:
// ● The number of sales made
// ● The average arithmetic rating for all computers
// Sales and rating must be formatted to the second digit after the decimal point.

function main(computerNums, salesAndRatings) {
	let totalRatings = 0;
	let totalsales = 0;
	let numRatings = 0;
	let ratingsAverage;

	//
	// for loop
	//   - start from 1  inital value
	//  - stop when I reached all computers (computerNumbs) <=computerNums
	//  - step inc 1
	//

	for (let i = 1; i <= computerNums; i++) {
		let computerSaleAndRating = salesAndRatings.shift(); //103
		let rating = computerSaleAndRating % 10; //103 %10 => 3
		totalRatings += rating;
		numRatings++;
		let computerSale = Math.floor(computerSaleAndRating / 10); //103 / 10 => 10
		if (rating === 6) {
			totalsales += computerSale * 1.0;
		} else if (rating === 5) {
			totalsales += computerSale * 0.85;
		} else if (rating === 4) {
			totalsales += computerSale * 0.7;
		} else if (rating === 3) {
			totalsales += computerSale * 0.5;
		} else if (rating === 2) {
			totalsales += computerSale * 0;
		}
	}

	console.log(totalsales.toFixed(2));
	ratingsAverage = totalRatings / numRatings;
	console.log(ratingsAverage.toFixed(2));

	// inside the for loop code block
	// let computerSaleAndRating = salesAndRatings.shift()     e.g. 103  -> 103/10 = 10.3
	//  let rating= computerSaleAndRating %10;  to get the last digit
	//  totalRatings +=rating
	//  numRatings inc 1;
	//  computerSale = Math.trunc(computerSaleAndRating /10)
	// if rating == 2
	//   Totalsales +=computerSale*0;
	// else if rating == 3
	//   Totalsales += computerSale 50%;
	// else if rating == 4
	//   Totalsales += computerSale 70%;
	// else if rating == 5
	//   Totalsales += computerSale 85%;
	// else if rating == 6
	//   Totalsales += computerSale 100%;
	//
	// outside the for loop
	//  console.log -> Totalsales fixed to 2 decimal points
	// calculate the average
	//  ratingsAverage = totalRatings / numRatings
	// console.log -> ratingsAverage fixed to 2 decimal points
}

main(3, [103, 103, 103]); // num sold is 15
// average rating is 3
main(5, [122, 156, 202, 214, 185]);
// 45.00
// 3.80
