/* 5. Special Bonus
Write a function to apply a 20% bonus for certain number: 
●	Receives a number from the input: the "stop number"
●	Receives numbers from the input until it finds the stop number
●	When the stop number is found, increase the value of the previous number before it with 20% and print it

Input	
25,[20,30,25]

Output
36 
*/
function main(stopNum, numbers) {
	let previousNum = numbers.shift();
	let result = 0;
	while (previousNum != stopNum) {
		let currentNum = numbers.shift();

		if (currentNum == stopNum) {
			result = previousNum + previousNum * 0.2;
			break;
		}
		previousNum = currentNum;
	}
	console.log(result);
}

main(25, [20, 30, 25]);
