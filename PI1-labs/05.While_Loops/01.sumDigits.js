/* 
    5634 % 10 => 4
    5634 /10 => Math.foor(563.4) => 563
    563 %10 =>3
    Mth.floor(563 /10 ) => 56
    56 % 10 => 6 
    Mth.floor(56 /10 ) => 5
    5 % 10 => 5
    math.floor(5/10) => 0

*/

function main(num) {
	let sum = 0;

	num = Math.abs(num);

	while (num !== 0) {
		sum += num % 10; //4 + 3 + 6 +5

		num = Math.floor(num / 10);
	}

	console.log(sum);
}

main(5634); //5 + 6 + 3 + 4 => 18
// 500
// 60
// 3

main(150); //1 + 5 + 0 => 6

main(-532); //5 + 3 + 2 => 10
