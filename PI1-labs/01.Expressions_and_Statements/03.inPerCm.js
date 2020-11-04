/* 
Write a function to convert inches to centimeters, which:
    • Receives a number: the inches to be converted
    • Calculates them to centimeters 
        - 1 inch = 2.54 centimeters
    • Prints the result, formatted with 2 digits after the decimal point
*/

function main(inches){
    let centimeters = inches * 2.54;
    console.log(centimeters.toFixed(2));
}

main(21);
main(71);
main(87);
main(4);
