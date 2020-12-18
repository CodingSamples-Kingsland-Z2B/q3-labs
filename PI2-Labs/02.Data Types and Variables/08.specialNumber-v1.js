function main(n) {
    // Loop through 1-n
    for (let i = 1; i <= n; i++) {
        let sum = 0;
        let num = i;
        while (num > 0) {
            sum += num % 10; //15 %10 -> 5 , sum = 5 +1 ;
            // num = Math.trunc(num / 10);  //15 /10 = 1.5
            num = parseInt(num / 10);
        }

        if (sum === 5 || sum === 7 || sum === 11) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }

        // (sum === 5 || sum === 7 || sum === 11) ? console.log(`${i} -> True`) : console.log(`${i} -> False`)
    }
}

main(15);