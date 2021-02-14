// function main(num1, num2, num3) {
function main(...numsArr) {

    // Create an array
    // let numsArr = [num1, num2, num3];

    // Sort Asc 
    numsArr.sort((a, b) => a - b);


    console.log(`The largest number is ${numsArr.pop()}.`);
}

main(-3, -5, -22.5);