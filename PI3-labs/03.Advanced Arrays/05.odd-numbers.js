function main(arr) {

    let output = arr.filter((num, index) => index % 2 != 0).map(num => num * 2).reverse().join(' ');
    console.log(output);
}

main([10, 15, 20, 25]);