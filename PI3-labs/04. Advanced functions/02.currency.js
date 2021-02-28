function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2, 2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}


// func input is a copy of the currncyFormatter function 
// so it can be invoked 
function main(func) {
    // returning a function to be stored in the dollar formatter variable. 
    // This function can take only one argument 
    return function(x) {
            // call the func() - currencyFormatter() with fixed variables and pass x to the last argument (value)
            // return the returned formatted sting to be printed 
            return func(',', '$', true, x);
        }
        // return (x)=> func(',','$',true, x);
}

// 1. call main function with currencyFormatter as argument and return from it a function to store it 
// dollar formatter variable 
let dollarFormatter = main(currencyFormatter);
// 2. dollarFormatter function takes 1 argument 
console.log(dollarFormatter(5345));
console.log(dollarFormatter(3.1429));
console.log(dollarFormatter(2.709));