function main() {
	let tESTMin = hourExamStart * 60 + minExamStart;
	let tATMin = hourArrived * 60 + minArrived;

	if (tESTMin === tATMin || (tESTMin - tATMin < 30 && tESTMin - tATMin > -30)) {
		status = "On time";
	} else if (tESTMin - tATMin < 30) {
		status = 1;
	} else if (tESTMin - tATMin > -30) {
	}
}
