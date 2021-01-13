function main(arr) {
    // // Get odd Index elements - filter()
    // let oddIndexArr = arr.filter((value, index) => index % 2 != 0);

    // // Double the array elements values - map()
    // let doubledArr = oddIndexArr.map((item) => item * 2);

    // // reverse it
    // let reversedArr = doubledArr.reverse();

    // // output value
    // console.log(reversedArr.join(' '));

    // Chained version

    let output = arr
        .filter((value, i) => i % 2 == 1)
        .map((a) => a * 2)
        .reverse()
        .join(' ');
    console.log(output);
}

main([10, 15, 20, 25]);