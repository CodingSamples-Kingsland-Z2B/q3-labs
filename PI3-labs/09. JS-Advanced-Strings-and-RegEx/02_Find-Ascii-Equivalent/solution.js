function solve() {
    const result = document.getElementById('result');
    const input = document.getElementById('text'); // 75 105 John Adams 110 103 115 Roger 108 97 110 100 

    let numArr = input.value.match(/[0-9]+/g); // [75,105,110,103,115,108,97,110,100]
    let wordsArr = input.value.match(/ [A-Za-z@!#$%^]+ |[^\s\d]/gi); //['John', 'Adams, 'Roger']

    console.log(wordsArr);

    numArr = numArr.map(el => String.fromCharCode(el)); //['k', 'i', 'n', 'g', 's', 'l', 'a', 'n', 'd']
    numArr = '<p>' + numArr.join('') + '</p>'; // <p> kingsland </p>

    wordsArr = wordsArr.map(word => word.split('').map(ch => ch.charCodeAt()))
    wordsArr = wordsArr.map(arr => `<p>` + arr.join(' ') + `</p>`).join('');
    console.log(wordsArr);
    result.innerHTML = wordsArr + numArr;

}