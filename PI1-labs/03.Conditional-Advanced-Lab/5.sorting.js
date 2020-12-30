// num1<num2<num3    Ascending
// num1>num2>num3    Descending

function main(num1, num2, num3) {
	if (num1 > num2 && num2 > num3) {
		console.log("Descending");
	} else if (num1 < num2 && num2 > num3) {
		console.log("Ascending");
	} else {
		console.log("Not sorted");
	}
}
