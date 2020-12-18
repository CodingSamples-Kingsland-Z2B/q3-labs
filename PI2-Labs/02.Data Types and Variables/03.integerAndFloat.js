function main(num1, num2, num3) {
    let sum = num1 + num2 + num3; // number + string = string

    // sum = 603/ 1 = 603 and remainder = 0   // integer
    // sum = 110.1 / 1 = 110.1 remainser = 1  //float
    // sum % 1 === 0 ? (sum += ' - Integer') : (sum += ' - Float');

    if (sum % 1 === 0) {
        sum = `${sum} - Integer`;
    } else {
        sum = sum + '- Float';
        // console.log(typeof sum);
    }

    console.log(sum);
}

//main(9, 100, 1.1);
//main(100, 200, 303);