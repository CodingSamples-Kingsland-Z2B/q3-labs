function main(start, end) {
    // outer loop 5-50
    for (let num = start; num <= end; num++) {
        let prime = true;
        for (let i = 2; i <= num; i++) {
            if (num % i == 0 && num !== i) {
                prime = false;
                break;
            }
        }
        if (prime) {
            console.log(num);
        }
    }
}

main(5, 50);