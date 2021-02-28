function main() {

    let string = '';

    return {
        append: (s) => string += s,
        print: () => console.log(string),
        removeEnd: (n) => string = string.substring(0, string.length - n),
        removeStart: (n) => string = string.substring(n)
    }
}
let firstZeroTest = main();
firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print()