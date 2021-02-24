function main(inputArr) {
    let mainSum = 0;
    let secSum = 0;
    let temp = [];

    inputArr.forEach(arr => {
        temp = temp.concat(arr);
    });

    for (let i = 0; i < temp.length; i += 4) {
        mainSum += temp[i];
    }

    for (let i = 2; i < temp.length - 1; i += 2) {
        secSum += temp[i];
    }

    console.log(mainSum, secSum);
}


main([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]
]);