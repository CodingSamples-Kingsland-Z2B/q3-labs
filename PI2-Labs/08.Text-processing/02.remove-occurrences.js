function main(word, text) {
    // This variable will hold the text before removing the word
    let old;
    // Check if the text will be equal before and after removing the word
    while (old !== text) {
        // Make copy of the text before replacing the word with nothing (removing)
        old = text;
        text = text.replace(word, '');
    }

    console.log(text);
}

// function main(word, text) {
//     while (text.includes(word)) {
//         text = text.replace(word, '');
//     }
//     console.log(text);
// }

main('ice', 'kicegiciceeb'); //kgiciceeb  =>//kgiceb => //kgb