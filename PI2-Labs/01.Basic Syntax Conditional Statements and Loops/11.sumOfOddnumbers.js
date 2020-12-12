//Write a program that prints the next n odd numbers (starting from 1) and on the last row prints the sum of them.

// function main(n) {
//     let sum = 0;

//     let i = 1;

//     while (i < n * 2) {
//         if (i % 2 !== 0) {
//             console.log(i);
//             sum += i;
//         }
//         i++;
//     }

//     console.log('Sum:' + sum);
// }

function main(n) {
    let sum = 0;
    for (let i = 1; i < n * 2; i += 2) {
        console.log(i);
        sum = sum + i; //sum +=i
    }

    console.log(`Sum: ${sum}`);
}
main(5);