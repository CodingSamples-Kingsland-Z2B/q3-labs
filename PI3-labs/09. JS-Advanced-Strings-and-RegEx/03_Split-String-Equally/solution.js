function solve() {

    let result = document.getElementById('result');
    let inputText = document.getElementById('text').value;
    let inputNumber = document.getElementById('number').value; //5


    const inputLength = inputText.length; //RandomInput1234;   15
    const remainder = inputLength % inputNumber // 15 % 2   => 1

    if (remainder) {
        inputText = inputText + inputText.slice(0, (inputNumber - remainder));
    }

    const times = `.{${Number(inputNumber)}}`
    const regex = new RegExp(times, 'gi');

    let match = inputText.match(regex);
    result.innerText = match.join(' ');



}