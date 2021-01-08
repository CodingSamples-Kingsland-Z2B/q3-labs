function main(num1, num2, opt) {
    let operators = ['multiply', 'subtract', 'add', 'divide'];
    let mathOpt = ['*', '-', '+', '/'];

    let index = operators.indexOf(opt);
    let sign = mathOpt[index];

    let result = eval(`${num1}${sign}${num2}`);
    console.log(result);
}

main(20, -4, 'subtract'); //error