function solve() {

    let word = document.getElementById('word').value;
    let arr = JSON.parse(document.getElementById('text').value);
    let result = document.getElementById('result')

    const wordToReplace = arr[0].split(' ')[2]; //programing
    const regex = new RegExp(wordToReplace, 'gi');
    arr = arr.map(para => `<p>` + para.replace(regex, word) + '<p>').join('');
    result.innerHTML = arr;

}