function main(arr) {

    let output = [];

    arr.forEach((num, index) => {
        // initially set the number to be top integer 
        let max = true;
        for (let nextIndex = index + 1; nextIndex < arr.length; nextIndex++) {
            if (num <= arr[nextIndex]) {
                max = false;
                break;
            }
        }
        if (max) {
            output.push(num);
        }
    })

    console.log(output.join(' '));


}

main([14, 24, 3, 19, 15, 17]);