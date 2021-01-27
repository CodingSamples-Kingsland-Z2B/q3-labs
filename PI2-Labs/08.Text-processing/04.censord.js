function main(text, word) {

    let censored = text.replace(word, repeat(word));

    // while (censored.includes(word)) {
    //     censored = censored.replace(word, repeat(word));
    // }
    console.log(censored);
}

function repeat(word) {
    return '*'.repeat(word.length);
}

// function main(text, word) {
//     while (text.includes(word)) {
//         text = text.replace(word, '*'.repeat(word.length))
//     }
//     console.log(text);
// }

main("A small sentence with some words small small", "small")