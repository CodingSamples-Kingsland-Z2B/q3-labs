function main(arr) {
    // SORT array alpha
    arr.sort((a, b) => a.localeCompare(b));

    // Iterate through the arr
    arr.forEach((el, i) => {
        console.log(`${i + 1}.${el}`);
    });
}

main(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);