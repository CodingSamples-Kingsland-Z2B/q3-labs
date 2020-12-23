// Write a program which receives two string arrays and print on the console whether they are identical or NOT.
// Arrays are identical if their elements are equal.
// If the arrays are identical find the sum of the first one and print on the console following message:
// Arrays are identical. Sum: {sum}'
// If the arrays are NOT identical find the first index where the arrays differ and print on the console following message:
// Arrays are not identical. Found difference at {index} index'.

function main(arr1, arr2) {
    let sum = 0;
    let index = 0;
    let areEqual = true;

    // check if the arrays are equal or not

    for (let i = 0; i < arr1.length; i++) {
        if (Number(arr1[i]) != Number(arr2[i])) {
            areEqual = false;
            index = i;
            break;
        } else {
            sum += Number(arr1[i]);
        }
    }

    if (areEqual) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    } else {
        console.log(`Arrays are not identical. Found difference at ${index} index`);
    }
}

main(['10', '20', '30'], ['10', '20', '30']);
//main(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']);
//main(['1'], ['10']);