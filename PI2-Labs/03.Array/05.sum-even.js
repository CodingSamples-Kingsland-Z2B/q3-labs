// Write a program which receives an array of strings, parse them to numbers and sum only the even numbers.

function main(inputArr) {
    let sum = 0;

    for (let num of inputArr) {
        if (num % 2 === 0) {
            sum += Number(num);
        }
    }

    console.log(sum);
}

main(['1', '2', '3', '4', '5', '6']);
//main(['3', '5', '7', '9']);
//main(['2', '4', '6', '8', '10']);