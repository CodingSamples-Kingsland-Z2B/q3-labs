/* 
Write a function to find the min and max numbers
●	Reads numbers until "END" is reached
●	Prints the biggest and the smallest number


Input
[10,20,304,0,50,'END']
out
Min number: 0
Max number: 304
 */
function main(numbers) {
	let num = numbers.shift();
	let max = num; //box max = 10
	let min = num;

	while (num != "END" && num != undefined) {
		if (num > max) {
			max = num;
		}

		if (num < min) {
			min = num;
		}
		num = numbers.shift();
	}

	console.log(`Min number: ${min}`);
	console.log(`Max number: ${max}`);
}

main([10, 20, 304, 0, 50, "END"]);
