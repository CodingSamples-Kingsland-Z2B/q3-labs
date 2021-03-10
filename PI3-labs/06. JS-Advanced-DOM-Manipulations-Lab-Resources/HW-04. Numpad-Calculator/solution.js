function solve() {

    // Dom variables 
    const expression = document.getElementById('expressionOutput');
    const output = document.getElementById('resultOutput');

    document.addEventListener('click', clickHandler);


    function clickHandler(e) {
        let button = e.target;
        // check id the user clicked on a button 
        if (button.nodeName == 'BUTTON') {
            // my code here

            // check if button is not clear btn or = button 
            if (button.value !== 'Clear' && button.value !== '=') {
                expression.textContent += button.value;
            } else if (button.value == 'Clear') {
                expression.textContent = '';
                output.textContent = '';
            } else if (button.value === '=') {

                // get the expression field string 
                let string = expression.textContent;
                // get the last digit 
                let lastDigit = string[string.length - 1];
                let result;
                // if it is not a number 
                if (isNaN(lastDigit) || lastDigit === '.') {
                    result = 'NaN';
                } else {
                    result = eval(string);
                }
                // show the result
                output.textContent = result;

            }
        }
    }



}