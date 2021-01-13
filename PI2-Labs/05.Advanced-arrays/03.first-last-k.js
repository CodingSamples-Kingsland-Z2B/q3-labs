function main(arr) {
    // Get the k value first element in the array
    let k = arr.shift(); //[6,7,8,9]
    let first = arr.slice(0, k); //first = [6,7,8];
    let end = arr.slice(arr.length - k); //end [7,8,9]
    // print outputs
    console.log(first.join(' '));
    console.log(end.join(' '));
}

main([2, 7, 8, 9]);