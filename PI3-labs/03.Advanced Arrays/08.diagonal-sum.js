function main(inputArr) {
    let mainArr = [];
    let secArr = [];
    let mainIndex = 0;
    let secIndex = inputArr[0].length - 1; // 2 

    // Loop through every array 
    inputArr.forEach(row => {
        mainArr.push(row[mainIndex]);
        secArr.push(row[secIndex]);
        mainIndex++;
        secIndex--;
    });

    let mainSum = mainArr.reduce((a, b) => a + b, 0);
    let secSum = secArr.reduce((a, c) => a + c);
    console.log(mainSum, secSum);

}


main([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]
]);