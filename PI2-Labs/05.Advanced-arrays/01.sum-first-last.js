function main(arr) {
    // Get the first Item
    let firstItem = Number(arr.shift());

    // Get the last Item
    let lastItem = +arr.pop();

    // Print the sum
    console.log(firstItem + lastItem);
}

main(['20', '30', '40']);