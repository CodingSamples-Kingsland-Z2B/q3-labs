function main(places, minAge, pplCount, ppl) {
	let numOnCoaster = 0;

	for (let i = 0; i < pplCount; i++) {
		let potentialpassenger = ppl.shift();
		if (potentialpassenger >= minAge) {
			numOnCoaster++;
		}
	}

	if (numOnCoaster >= places) {
		console.log("The rollercoaster departures");
	} else {
		console.log("Waiting...");
	}
}

main(2, 10, 3, [15, 12, 8]);
main(5, 11, 0);
