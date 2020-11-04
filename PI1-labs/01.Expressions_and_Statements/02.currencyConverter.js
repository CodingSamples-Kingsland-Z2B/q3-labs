/* 
Write a USD to EUR converting function, which:
    • Receives a number: the dollars to be converted 
    • Converts dollars to euro (the rate of dollars to euro is 0.88)
    • Prints the converted value in euro
*/

function main(usd){
    let euro = usd * 0.88;
    console.log(`${euro.toFixed(2)} EUR`);
}

main(17);
main(87);
main(42);