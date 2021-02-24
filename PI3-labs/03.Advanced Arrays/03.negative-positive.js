// function main(arr) {

//     // create an empty array; 
//     let output = [];

//     arr.forEach(num => {
//         if (num < 0) {
//             // Added to the beggining of output array 
//             output.unshift(num);
//         } else {
//             // Added to the end of the output array 
//             output.push(num);
//         }
//     });

//     console.log(output.join('\n'));

// }
function main(arr) {

    // create an empty array; 
    let output = [];
    arr.forEach(num => num < 0 ? output.unshift(num) : output.push(num));
    console.log(output.join('\n'));

}

// main([7, -2, 8, 9]);
main([3, -2, 0, -1]);