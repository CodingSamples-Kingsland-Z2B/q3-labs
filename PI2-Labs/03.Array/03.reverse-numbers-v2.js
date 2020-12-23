/*
Write a program which receives a number n and an array of elements. 
Your task is to 
1. create a new array with n numbers, 
2. reverse it 
3. and print its elements on a single line, space separated.
*/
function main(n, inputArr) {
    inputArr.splice(n, inputArr.length - n);
    inputArr.reverse();
    console.log(inputArr.join(' '));
}

main(3, [10, 20, 30, 40, 50]);
//main(4, [-1, 20, 99, 5]);
main(2, [66, 43, 75, 89, 47]);