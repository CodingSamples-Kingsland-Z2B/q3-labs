function solve() {
    const inputText = document.getElementById('text').value;
    const currentCase = document.getElementById('naming-convention').value;
    const result = document.getElementById('result');

    // validation user entry 
    if (!inputText || !currentCase) {
        result.innerText = "Please enter the form fields"
        return;
    }


    // create an array of input words 
    const words = inputText.split(' ');

    // convert the naming convention input to lowerCase
    const convension = currentCase.toLowerCase();

    let output;

    if (convension == 'pascal case') {
        output = pascalCase(words).join('');
    } else if (convension == 'camel case') {
        output = camelCase(words).join('');
    } else {
        output = 'Incorrect Naming convension';
    }

    result.innerText = output;

}

// hello =>  word.charAt(0) => h   word.charAt(0).toUpperCase() => H  , word.slice(1) => ello
function pascalCase(words) {
    words = words
        .map(word => word.toLowerCase())
        .map(word => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
    return words;
}

// try any thing 
//Any Thing 

function camelCase(words) {
    const firstWord = words.shift().toLowerCase();
    words = [firstWord, ...pascalCase(words)]
    return words;
}