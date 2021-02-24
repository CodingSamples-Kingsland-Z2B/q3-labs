function main(n, k) {
    // The first element is 1
    let output = [1];

    // Generate n number of sequence items
    for (let i = 1; i < n; i++) {

        // Get a copy of previous k elements 
        let slicedArr = output.slice(Math.max(output.length - k, 0));
        let sum = slicedArr.reduce((a, c) => a + c);
        output.push(sum);
    }

    console.log(output.join(' '))

}

main(6, 3)