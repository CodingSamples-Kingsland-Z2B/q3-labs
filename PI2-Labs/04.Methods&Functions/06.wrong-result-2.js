function solve(num1, num2, num3) {
    let count = 0;

    if (num1 < 0) {
        count++;
    }
    if (num2 < 0) {
        count++;
    }
    if (num3 < 0) {
        count++;
    }

    if (num1 == 0 || num2 == 0 || num3 == 0) {
        console.log('Positive');
    } else if (count % 2 == 0) {
        console.log('Positive');
    } else {
        console.log('Negative');
    }
}

solve(-1, 0, -3);