// Write a program that calculates the difference between the sum of the even and the sum of the odd numbers in an array.

function main(inputArr) {
    let oddSum = 0;
    let evenSum = 0;

    for (let item of inputArr) {
        item = Number(item);
        if (item % 2 === 0) {
            evenSum += item;
        } else {
            oddSum += item;
        }
    }

    console.log(evenSum - oddSum);
}

main(['1', '2', 3, 4, 5, 6]);
// main([3, 5, 7, 9]);
// main([2, 4, 6, 8, 10]);