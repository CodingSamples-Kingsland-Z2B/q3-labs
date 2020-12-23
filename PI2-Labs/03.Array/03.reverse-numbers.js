/*
Write a program which receives a number n and an array of elements. 
Your task is to 
1. create a new array with n numbers, 
2. reverse it 
3. and print its elements on a single line, space separated.
*/
function main(n, inputArr) {
    let arr = [];

    // creating new array with n numbers
    for (let i = 0; i < n; i++) {
        arr.push(inputArr[i]);
    }

    // Reversing the new array
    let output = '';
    for (let i = arr.length - 1; i >= 0; i--) {
        output += ` ${arr[i]}`;
    }

    console.log(output);
}

//main(3, [10, 20, 30, 40, 50]);
//main(4, [-1, 20, 99, 5]);
main(2, [66, 43, 75, 89, 47]);