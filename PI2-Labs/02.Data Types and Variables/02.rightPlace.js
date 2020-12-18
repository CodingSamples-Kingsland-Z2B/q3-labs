function main(str, char, result) {
    // replace() method will search for a '_'character
    // and replace it with the char variable value
    let res = str.replace('_', char);
    // console.log(res);
    let output = res === result ? 'Matched' : 'Not Matched';
    console.log(output);

    // console.log(`${res === result ? 'Matched' : 'Not Matched'}`);
}

//main('Str_ng', 'I', 'Strong');
main('Str_ng', 'i', 'String');