function main(n) {
    let result = "";
    // even loop
    for (let even = 2; even <= n; even += 2) {
        // odd loop
        for (let odd = 1; odd <= n; odd += 2) {
            result += `${even}${odd}${even * odd} `;
        }
    }

    console.log(result);
}

main(5);