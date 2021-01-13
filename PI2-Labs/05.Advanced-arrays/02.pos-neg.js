function main(arr) {
    // Create an empty array
    let result = [];

    // Iterate through the input array
    arr.forEach((value) => {
        if (value < 0) {
            // Negative number
            result.unshift(value);
        } else {
            // Positive number or 0
            result.push(value);
        }
    });

    console.log(result.join('\n'));
}

main([7, -2, 8, 9]);