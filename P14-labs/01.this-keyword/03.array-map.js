// function main(arr, func) {
//     return arr.map(func);
// }

function arrayMap(arr, func) {
    return arr.reduce((acc, el) => {
        acc.push(func.call(arr, el))
        return acc;
    }, [])

};

let nums = [1, 2, 3, 4, 5];
console.log(arrayMap(nums, (item) => item * 2));