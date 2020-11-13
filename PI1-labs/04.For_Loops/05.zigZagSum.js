function main(n, nums) {
	let sum = 0;

	for (let i = 1; i <= n; i++) {
		let currentNum = nums.shift();

		if (i % 2 == 0) {
			sum -= currentNum;
		} else {
			sum += currentNum;
		}
	}
	console.log(sum);
}

main(2, [10, -20]);

main(3, [10, 20, 5]);
