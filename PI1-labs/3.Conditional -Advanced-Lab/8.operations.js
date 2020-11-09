function main(num1, num2, opt) {
    let result;
    switch (opt) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "%":
            result = num1 % num2;
            break;
    }
    console.log(`${num1} ${opt} ${num2} = ${result}`);
}

main(10, 12, "+");