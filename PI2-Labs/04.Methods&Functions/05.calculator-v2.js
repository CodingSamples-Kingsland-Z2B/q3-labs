function main(num1, num2, opt) {
    let operators = ['multiply', 'subtract', 'add', 'divide'];
    let mathOpt = ['*', '-', '+', '/'];

    let index = operators.indexOf(opt);
    let sign = mathOpt[index];
    //The result expression updated to accept signed numbers
//     The following expression should work in exam checker now 
   let result = eval(`${eval(num1)} ${sign} ${eval(num2)}`);
    console.log(result);
}

main(20, -4, 'subtract'); 
