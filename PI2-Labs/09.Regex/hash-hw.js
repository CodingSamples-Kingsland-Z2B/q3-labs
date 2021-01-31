// function main(string) {
//     let textChecker = /\s#[A-Za-z]+/g;

//     let matched = string.match(textChecker);
//     matched = matched.map(item => item.slice(1));
//     console.log(matched.join('\n'));

// }

function main(string) {
    // output array 
    let output = [];
    string.split(' ').forEach(word => {

        if (word[0] === '#') {
            let letters = word.split('');

            letters.shift();
            let numbers = letters.find(letter => !((letter >= 'a' && letter <= 'z') || (letter >= 'A' && letter <= 'Z')))

            if (!numbers && word.length > 1) {
                output.push(word);
            }
        }
    })

    output = output.map(item => item.slice(1, 3));

    console.log(output.join('\n'));
}

main('Nowadays everyone uses # to tag a #special word in #socialMedia')