function main(names) {

    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let validNames = [];


    // Method 1: using match()
    let matches = names.match(pattern);
    console.log(matches.join(' '));

    // Method 2: using exec()
    // let validName = pattern.exec(names);
    // while (validName) {
    //     validNames.push(validName[0]);
    //     validName = pattern.exec(names);
    // }
    // console.log(validNames.join(' '));

}
main('Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	   Ivanov')