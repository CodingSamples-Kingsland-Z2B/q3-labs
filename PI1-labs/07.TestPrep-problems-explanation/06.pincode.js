// Write a program that generates three-digit PIN codes,
//the digits of each PIN being within a certain interval. For a PIN
// to be valid, it must satisfy the following conditions:
// ● The first and third digits must be even 2,4,6,8 || number /2 .
// ● The second digit must be a prime number in the range [2...7] 2,3,5,7 .
/* 
    inputs 
    1 number range [1...9]
    2 number range [1...9]
    3 number range [1...9]
*/
function main(upperNum1, upperNum2, upperNum3) {
	// 1st loop (for loop (first digit) ) boundries (2- upperNum1) step +2
	for (let i = 2; i <= upperNum1; i += 2) {
		// 2nd loop (for loop (second digit) boundries (2-upperNum2) step +1
		for (let j = 2; j <= upperNum2; j++) {
			if (j == 2 || j == 3 || j == 5 || j == 7) {
				// 3rd loop (for loop (third digit)) boundries (2- upperNum3) step +2
				for (let k = 2; k <= upperNum3; k += 2) {
					//  console.log( {d1} {d2}{d3})
					console.log(`${i} ${j} ${k}`); //console.log( i +" " + j+" " + k);
				}
			}
		}
	}
}

main(3, 5, 5);
// 2 2 2
// 2 2 4
// 2 3 2
// 2 3 4
// 2 5 2
// 2 5 4
