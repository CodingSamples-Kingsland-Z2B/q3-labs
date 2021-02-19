function main(arr) {

    let text = arr[0];
    let regex = /\w+/g;

    // Object 
    let words = {};

    // words array 
    let wordsArr = text.match(regex);

    // Loop through every word in words array 
    wordsArr.forEach(word => {
        // filter for that word return array of how may times it exist in wordsArr
        let match = wordsArr.filter(a => a == word);
        // get the length of the match array 
        words[word] = match.length;
    })

    console.log(JSON.stringify(words));
}

main(['JS devs use Node.js for server-side JS.-- JS for devs'])