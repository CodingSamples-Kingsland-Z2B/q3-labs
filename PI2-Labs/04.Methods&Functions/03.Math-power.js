main(2, 8);

// function main will print the returned value
function main(num, power) {
    let output = pow(num, power);
    console.log(output);
}

// Return the num ^power (num multiply by itself power numbers)
// 2^8 = 1*2*2*2*2*2*2*2*2 = 256;
function pow(num, power) {
    // Inital value for returned value;
    let result = 1;
    for (let i = 1; i <= power; i++) {
        result *= num;
    }
    // Return result value;

    return result;
}