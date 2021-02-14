let nums = [1, 2, 3, 4];

let sum = nums.reduce((accum, item) => accum + item, 0);
let sumInverse = nums.reduce((accum, item) => accum + item, 0);
let concat = nums.reduce((accum, item) => accum + item, "");

console.log(sum);