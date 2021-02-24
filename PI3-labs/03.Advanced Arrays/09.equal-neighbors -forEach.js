function main(arr) {

    let count = 0;
    arr.forEach((rowArr, row) => {
        if (arr[row + 1]) {
            rowArr.forEach((val, col) => {
                if (arr[row][col] === arr[row + 1][col]) {
                    count++;
                }
            });
        }
    })

    console.log(count);
}

main([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']
])