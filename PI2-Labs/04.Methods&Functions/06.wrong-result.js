function main(num1, num2, num3) {
    let result = '';
    // num1 & num2 are positive
    if (num1 == 0 || num2 == 0 || num3 == 0) {
        result = 'Positive';
    } else if (num1 >= 0 && num2 >= 0) {
        result = checkNum(num3) ? 'Positive' : 'Negative';
        // num1 is positive and num2 is negative
    } else if (num1 >= 0 && num2 < 0) {
        result = checkNum(num3) ? 'Negative' : 'Positive';
        // num1 is negative and num2 is positive
    } else if (num1 < 0 && num2 >= 0) {
        result = checkNum(num3) ? 'Negative' : 'Positive';
        // num1 and num2 are both negative
    } else {
        result = checkNum(num3) ? 'Positive' : 'Negative';
    }
    console.log(result);
}

function checkNum(num) {
    if (num >= 0) {
        return true;
    }
    return false;
}

main(-1, 0, 1);