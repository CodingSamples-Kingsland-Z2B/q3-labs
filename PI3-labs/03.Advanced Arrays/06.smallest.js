function main(arr) {

    // Sorting my array Asc.
    let [num1, num2] = arr.sort((a, b) => a - b);
    // First 0, 1 index elements are the smallest 
    console.log(`${ num1} ${num2}`)

}

main([30, 15, 50, 5]);