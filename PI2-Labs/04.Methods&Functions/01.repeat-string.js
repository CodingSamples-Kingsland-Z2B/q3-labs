//  Repeat strings n times
function repeat(str, n) {
    // Create the output string with initial value of nothing;
    let result = '';
    // Loop n times
    for (let i = 0; i < n; i++) {
        result += str;
    }
    // return the result;
    return result;
}

// Print values to the screen
function main(inputStr, nTimes) {
    // store the return value in variable output
    let output = repeat(inputStr, nTimes);
    // print the value of variable output
    console.log(output);
}

main('abc', 3);
// main('String', 2);