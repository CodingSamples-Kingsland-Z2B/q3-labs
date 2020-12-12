//Write a program, which prints all the numbers from 1 to 100,
//which are divisible by 3. You have to use a single for loop.
//The program should not receive input.

// function main() {
//     for (let i = 1; i <= 100; i++) {
//         if (i % 3 == 0) {
//             console.log(i);
//         }
//     }
// }

function main() {
    for (let i = 3; i <= 100; i += 3) {
        console.log(i);
    }
}

main();