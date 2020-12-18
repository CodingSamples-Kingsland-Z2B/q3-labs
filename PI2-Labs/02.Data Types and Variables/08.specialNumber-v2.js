function main(n) {
    for (let i = 1; i <= n; i++) {
        let sum = 0;
        let number = i.toString(); // '15'

        for (let j = 0; j < number.length; j++) {
            sum += Number(number[j]);
        }

        if (sum === 5 || sum === 7 || sum === 11) {
            console.log(`${number} -> True`);
        } else {
            console.log(`${number} -> False`);
        }
    }
}

main(15);