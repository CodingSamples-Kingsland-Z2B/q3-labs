function solve() {
    let result = document.getElementById('result');
    let inputText = document.getElementById('text').value;
    let inputNumber = document.getElementById('number').value; //8

    inputNumber = Number(inputNumber);
    let arr = [];

    if (inputText.length % inputNumber !== 0) {
        let len = inputText.length;
        let symbolCount = 0;

        while (len % inputNumber !== 0) {
            // len %= inputNumber;
            len++;
            symbolCount++;
        }


        for (let i = 0; i < symbolCount; i++) {
            inputText += inputText[i];
        }


        for (let i = 0; i < inputText.length; i += inputNumber) {
            let subText = inputText.substr(i, inputNumber);
            arr.push(subText);
        }


    }

    result.innerText = arr.join(' ');

}