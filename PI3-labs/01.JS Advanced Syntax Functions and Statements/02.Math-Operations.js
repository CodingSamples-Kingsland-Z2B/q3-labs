let add = (a, b) => a + b;
let sub = (a, b) => a - b;
let mul = (a, b) => a * b;
let div = (a, b) => a / b;
let mod = (a, b) => a % b;
let pow = (a, b) => a ** b;

function main(num1, num2, operator) {
    let output;

    switch (operator) {
        case '+':
            output = add(num1, num2);
            break;
        case '-':
            output = sub(num1, num2);
            break;
        case '*':
            output = mul(num1, num2);
            break;
        case '/':
            output = div(num1, num2);
            break;
        case '%':
            output = mod(num1, num2);
            break;
        case '**':
            output = pow(num1, num2);
            break;
    }
    console.log(output);
}

main(3, 5.5, '*');