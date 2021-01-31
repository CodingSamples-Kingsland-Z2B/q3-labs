function main(names) {

    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let validNames = [];

    let validName = pattern.exec(names);
    let validName2 = pattern.exec(names);
    console.log(validName2[0]);


}
main('Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	   Ivanov')