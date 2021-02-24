function main(arr) {

    // Create an empty array
    let output = [];


    arr.forEach(row => {
        // output = output.concat(row);
        output = [...output, ...row];
    });

    // sort the output array
    // output.sort((a, b) => a - b);
    // console.log(output.pop());

    console.log(Math.max(...output));



}

main([
    [20, 50, 10],
    [8, 33, 145]
])