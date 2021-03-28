function encodeAndDecodeMessages() {

    const textBoxes = document.querySelectorAll('textarea');
    const btns = document.querySelectorAll('button');
    const [encodeBox, decodeBox] = textBoxes;
    const [encodeBtn, decodeBtn] = btns;

    encodeBtn.addEventListener('click', encode);
    decodeBtn.addEventListener('click', () => decodeBox.innerText = encodeDecode(decodeBox.value, -1));

    function encode() {

        // let charArr = encodeBox.value.split('');

        //['H','E','L','L','O']==> [73,70,77, 77,80  ] => ['I', 'F','M', 'M','P']
        // let encodeArr = charArr.map(ch => {
        //     let tempChar = ch.charCodeAt() + 1;
        //     tempChar = String.fromCharCode(tempChar)
        //     return tempChar;
        // });

        // Clear user input 
        decodeBox.innerText = encodeDecode(encodeBox.value, 1);
        encodeBox.value = '';
    }

    // function decode() {
    //     // let charArr = decodeBox.value.split("");
    //     // let decodeArr = charArr.map(ch => {
    //     //     let tempChar = ch.charCodeAt() - 1;
    //     //     tempChar = String.fromCharCode(tempChar)
    //     //     return tempChar;
    //     // });
    //     // decodeBox.innerText = decodeArr.join("");
    //     decodeBox.innerText = encodeDecode(decodeBox.value, -1);

    // }

}


function encodeDecode(string, key) {
    let charArr = string.split('');
    let encodeArr = charArr.map(ch => {
        let tempChar = ch.charCodeAt() + key;
        tempChar = String.fromCharCode(tempChar)
        return tempChar;
    });
    return encodeArr.join("");
}