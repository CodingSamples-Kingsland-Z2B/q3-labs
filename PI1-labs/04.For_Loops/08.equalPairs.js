function main(n, pairs) {
	let lastsum = pairs.shift() + pairs.shift();
	let maxdiff = -Infinity;
	let value = 0;
	let equalPairs = true;

	for (let i = 1; i < n; i++) {
		let tempSum = pairs.shift() + pairs.shift();
		if (tempSum === lastsum) {
			value = lastsum;
		} else {
			equalPairs = false;
			let sumDiff = Math.abs(tempSum - lastsum);
			if (sumDiff > maxdiff) {
				maxdiff = sumDiff;
			}
		}
	}

	if (equalPairs) {
		console.log(`Yes, value=${value}`);
	} else {
		console.log(`No, maxdiff=${maxdiff}`);
	}
}

main(2, [-1, 0, 0, -1]);
main(2, [5, 6, 3, 7]);
