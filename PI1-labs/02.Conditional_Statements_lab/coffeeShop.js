/* 
Write a function to calculate the price for a drink, which:
    ● Receives a drink name: either "coffee" or "tea"
    ● Receives an extra: either "sugar" or "no"
    ● Prints the price in format "Final price: ${price}"
Prices:
●	Coffee: 1.00
●	Tea: 0.60
●	Sugar: 0.40

*/
function main(drinkName,extra){
    let total = 0;
    if(drinkName == "coffee"){
        total = 1.00;
    }
    else{
        total = 0.6;
    } 

    if(extra == "sugar"){
        total += 0.4;
    }
    console.log(`Final Price: $${total.toFixed(2)}`);
}
main("coffee","sugar");