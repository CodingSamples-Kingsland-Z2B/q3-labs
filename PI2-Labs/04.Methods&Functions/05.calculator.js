function main(num1, num2, opt) {
    let result;
    switch (opt) {
        case 'add':
            result = add(num1, num2);
            break;
        case 'subtract':
            result = sub(num1, num2);
            break;
        case 'multiply':
            result = multiply(num1, num2);
            break;
        case 'divide':
            result = divide(num1, num2);
            break;
    }
    console.log(result);
}

let add = (a, b) => a + b;
let sub = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

main(40, 8, 'divide');
main(12, 19, 'add');