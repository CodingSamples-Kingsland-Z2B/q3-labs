function main(num1, num2, operator) {
    let output;

    switch (operator) {
        case '+':
            output = num1 + num2;

        case '-':
            output = num1 - num;
            break;
        case '*':
            output = num1 * num2;
            break;
        case '/':
            output = num1 / num2;
            break;
        case '%':
            output = num1 % num2;
            break;
        case '**':
            output = num1 ** num2;
            break;
    }


    console.log(output);
}





main(3, 5.5, '*');