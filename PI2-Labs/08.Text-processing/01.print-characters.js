function main(str) {

    // Method 1:loop through the string using for of (value)
    for (let ch of str) {
        console.log(ch);
    }

    // Method 2: forEach
    // str.split('').forEach(ch => console.log(ch));
    // Method 3 : array methods 
    // console.log(str.split('').join('\n'));
}

main('AWord')