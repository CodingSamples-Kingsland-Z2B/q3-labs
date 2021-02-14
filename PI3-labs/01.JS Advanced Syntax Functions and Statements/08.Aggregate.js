function main(arr) {
    // Solve for sum 
    console.log(solve(arr, 0, (a, b) => a + b));
    // solve for sum inverse 
    console.log(solve(arr, 0, (a, b) => a + 1 / b).toFixed(4));
    // solve for concatenation
    console.log(solve(arr, "", (a, b) => a + b));

}

function solve(nums, initValue, func) {
    let result = initValue;
    for (let i = 0; i < nums.length; i++) {
        result = func(result, nums[i]);
    }
    return result;

}

main([1, 2, 3]);