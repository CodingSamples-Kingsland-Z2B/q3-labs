function main(n) {
    let result = "";

    for (let d1 = 1; d1 <= 9; d1++) {
        for (let d2 = 0; d2 <= 9; d2++) {
            if (d1 + d2 === n) {
                for (let d3 = 0; d3 <= 9; d3++) {
                    for (let d4 = 0; d4 <= 9; d4++) {
                        if (d3 + d4 == n) {
                            result += `${d1}${d2}${d3}${d4} `;
                        }
                    }
                }
            }
        }
    }
    console.log(result);
}

main(3);