function solve() {

    let result = document.getElementById('result');
    let input = document.getElementById('text').value;
    findAscii(input)

    function findAscii(input) {

        let split = input.split(' ').filter(el => el !== '');

        let output = "";

        for (let element of split) {

            if (Number(element)) {
                output += String.fromCharCode(element)
            } else {
                let charArr = [];
                //word
                for (let i = 0; i < element.length; i++) {
                    charArr.push(element[i].charCodeAt());
                }

                let p = document.createElement('P');
                p.innerText = charArr.join(' ');
                console.log(p);
                result.appendChild(p);
            }
        }

        let p = document.createElement('P');
        p.innerText = output;
        result.appendChild(p);

    }
}