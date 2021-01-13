function main(n, k) {
    // Create and initate the sequense
    let seq = [1];
    // Sum variable
    let sum = 1;

    // Iterate n times
    for (let i = 1; i < n; i++) {
        let start = Math.max(0, i - k);
        let end = i - 1;
        let sumArr = seq.slice(start, end);
        // add sumArr elements to sum variable
        sumArr.forEach((item) => {
            sum += item;
        });
        seq[i] = sum;
    }

    console.log(seq.join(' '));
}

main(6, 3);