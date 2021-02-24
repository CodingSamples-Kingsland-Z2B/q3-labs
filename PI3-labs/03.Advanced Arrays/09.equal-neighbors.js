function main(arr) {

    let count = 0;
    for (let row = 0; row < arr.length; row++) {
        if (arr[row + 1]) {
            //if the array have a neighboor
            for (let col = 0; col < arr[row].length; col++) {
                // if the array row and col = neighbor row+1 and colum 
                // inc count 
                if (arr[row][col] === arr[row + 1][col]) {
                    count++;
                }
            }
        }
    }

    console.log(count);
}

main([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']
])