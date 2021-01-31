function main(nums) {
    let pattern = /\+404(-| )\d{3}\1\d{4}\b/g;

    // let matches = nums.match(pattern);
    // console.log(matches.join(', '));

    let validNums = [];
    //Method 2: using exec()
    let validNum = pattern.exec(nums);
    while (validNum) {
        validNums.push(validNum[0]);
        validNum = pattern.exec(nums);
    }
    console.log(validNums.join(', '));

}

main('+404 222 2222, 404-222-2222, +404/222/2222, +404-222 2222 +404 222-2222, +404-222-222, +404-222-22222 +404-222-2222')