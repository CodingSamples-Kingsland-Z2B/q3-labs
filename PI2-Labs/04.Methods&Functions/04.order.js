// calcPrice() will return the total price
function calcPrice(drinkType, qty) {
    switch (drinkType) {
        case 'water':
            return 1 * qty;
        case 'coffee':
            return 1.5 * qty;
        case 'coke':
            return 1.4 * qty;
        case 'snacks':
            return 2 * qty;
    }
}

// main function
function main(drink, qty) {
    let output = calcPrice(drink, qty);
    console.log(output.toFixed(2));
}

main('water', 5);
main('coffee', 2);