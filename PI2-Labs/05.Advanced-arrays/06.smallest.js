function main(arr) {
    // sort the arry ascen
    arr.sort((a, b) => a - b);
    // let outputArr = [arr[0], arr[1]];
    // console.log(outputArr.join(' '));
    console.log(arr[0], arr[1]);
}

main([3, 0, 10, 100, 7, 3]);