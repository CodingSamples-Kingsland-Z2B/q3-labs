function main(string, searchedWord) {


    // Text processing Level 
    // let counter = 0;

    // while (string.includes(' ' + searchedWord + ' ')) {
    //     string = string.replace(' ' + searchedWord + ' ', '');
    //     counter++;
    // }
    // console.log(counter);


    // Array 
    let words = string.split(' ');
    let counter = 0;
    for (let word of words) {
        if (word === searchedWord) {
            counter++;
        }

        // (word === searchedWord) ? counter++ : '';
    }
    console.log(counter);


    // let words = string.split(' ');
    // let found = words.filter(word => word == searchedWord);
    // console.log(found.length);

    // console.log(string.split(' ').filter(word => word == searchedWord).length);



}

main("This is a word and it also is a sentence", "is")