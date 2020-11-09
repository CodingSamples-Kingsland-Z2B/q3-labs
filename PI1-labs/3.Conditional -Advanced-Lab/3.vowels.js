function main(letter) {
    letter = letter.toLowerCase();
    if (
        letter === "a" ||
        letter === "e" ||
        letter === "o" ||
        letter === "u" ||
        letter === "i"
    ) {
        console.log("Vowel");
    } else {
        console.log("Consonant");
    }
}

main("a");
main("x");
main("E");
main("i");
main("b");