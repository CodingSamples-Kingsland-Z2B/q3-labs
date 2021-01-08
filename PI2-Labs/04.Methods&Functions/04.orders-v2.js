// calcPrice() will return the total price
function calcPrice(drinkType, qty) {
    let drinks = ['water', 'coffee', 'coke', 'snacks'];
    let prices = [1, 1.5, 1.4, 2];

    let index = drinks.indexOf(drinkType);
    let price = prices[index];
    return price * qty;

    // return prices[drinks.indexOf(drinkType)]*qty
}

// main function
function main(drink, qty) {
    let output = calcPrice(drink, qty);
    console.log(output.toFixed(2));
}

// main('water', 5);
main('snacks', 2);