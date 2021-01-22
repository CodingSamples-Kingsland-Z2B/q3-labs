function main(arr) {

    // Create an Empty Map
    let map = new Map();

    // Iterate through the input array to store key/value in Map
    for (let item of arr) {
        let product = item.split(' ')[0];
        let quantity = Number(item.split(' ')[1]);
        // If the map doesn't has this item - key 
        // add to the map
        if (!map.has(product)) {
            map.set(product, quantity);
        }
        // If it is already exists 
        else {
            // Get the old quantity 
            let oldQuantity = map.get(product);
            let newQuantity = oldQuantity + quantity;
            map.set(product, newQuantity);
        }
    }


    // Iterate to print the map keys/values 
    // for (let kvp of map.entries()) {
    //     console.log(`${kvp[0]} -> ${kvp[1]}`)
    // }

    for (let [key, value] of map) {
        console.log(`${key} -> ${value}`)
    }
}

main(['tomatoes 10', 'coffee 5', 'olives 100', 'coffee 40'])