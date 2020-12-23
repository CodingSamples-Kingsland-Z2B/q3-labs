// Write a function that receives an array of strings and prints the sum of first and last element in that array.

// function main(arr) {
//     let firstElement = arr.shift();
//     let lastElement = arr.pop();
//     let sum = Number(firstElement) + Number(lastElement);
//     // let sum = +firstElement + +lastElement;
//     console.log(sum);
//     console.log(arr);
// }

function main(arr) {
    let firstElement = arr[0];
    let lastElement = arr[arr.length - 1];
    let sum = Number(firstElement) + Number(lastElement);
    console.log(sum);
    // console.log(arr);
}
main(['20', '30', '40']);
main(['10', '17', '22', '33']);
main(['11', '58', '69']);