function main(n) {
    // First digit 1-9
    for (let d1 = 1; d1 <= 9; d1++) {
        // Second digit 1-9
        for (let d2 = 1; d2 <= 9; d2++) {
            // Third digit 1-9
            for (let d3 = 1; d3 <= 9; d3++) {
                if (d1 * d2 * d3 === n) {
                    console.log(`${d1}${d2}${d3}`);
                }
            }
        }
    }
}

main(5);