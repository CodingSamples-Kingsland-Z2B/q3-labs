// Write a function that receives a number M and a number N (M will always be bigger than N).
// Print all numbers from M to N

function main(m, n) {
    for (let i = m; i >= n; i--) {
        console.log(i);
    }
}

// function main(m, n) {
//     let i = m;

//     while (i >= n) {
//         console.log(i);
//         i--;
//     }
// }

// main(6, 2);
main(4, 1);