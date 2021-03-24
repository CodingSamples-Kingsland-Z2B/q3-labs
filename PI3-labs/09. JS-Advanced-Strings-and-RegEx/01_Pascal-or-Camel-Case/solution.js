function solve() {

    let input = document.getElementById('text').value;
    let currentCase = document.getElementById('naming-convention').value;
    pascalOrCamel(input, currentCase);
}



function pascalOrCamel(input, currentCase) {

    let words = input.toLowerCase().split(' ').filter(word => word != '');

    let output = "";

    if (currentCase == 'Pascal case') {

        for (let word of words) {
            word = word.replace(word[0], word[0].toUpperCase());
            output += word;
        }

    } else if (currentCase == 'Camel case') {

        for (let word of words) {
            word = word.replace(word[0], word[0].toUpperCase());
            output += word;
        }
        output = output.replace(output[0], output[0].toLowerCase());
    } else {
        output = "Error";
    }

    let result = document.getElementById('result');
    result.innerText = output;

}