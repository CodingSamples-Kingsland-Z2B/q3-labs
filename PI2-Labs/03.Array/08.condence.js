// Write a program which receives an array of numbers and condense them by summing adjacent couples of elements until a single number is obtained.

function main(nums) {
    //  nums array have more than one item keep condensing
    while (nums.length > 1) {
        let condensed = [];
        // inner loop will add adjacent elements together
        for (let i = 0; i < nums.length - 1; i++) {
            // condensed.push(nums[i] + nums[i + 1]);
            condensed[i] = nums[i] + nums[i + 1];
        }
        //
        nums = condensed;
    }
    console.log(nums.join(' '));
}

main([2, 10, 3]);
main([5, 0, 4, 1, 2]);
main([1]);