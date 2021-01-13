function main(arr) {
    // Get the first Item
    let firstItem = Number(arr[0]);

    // Get the last Item
    let lastItem = Number(arr[arr.length - 1]);

    // Print the sum
    console.log(firstItem + lastItem);
}

main(['20', '30', '40']);