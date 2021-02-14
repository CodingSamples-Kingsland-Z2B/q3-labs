function main(arr) {

    // sum
    let sum = arr.reduce((a, b) => a + b, 0)
        // sum inverse
    let sumInverse = arr.reduce((a, b) => a + 1 / b, 0);
    // Let concat
    let concat = arr.reduce((a, b) => a + b, "");

    console.log(sum);
    console.log(sumInverse.toFixed(4));
    console.log(concat);
}



main([1, 2, 3]);