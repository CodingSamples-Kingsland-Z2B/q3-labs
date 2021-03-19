function subSum(array, startIndex, endIndex) {

    // if(!Array.isArray(array)) return NaN;
    if (array.constructor !== Array) return NaN;
    if (array.length === 0) return 0;
    if (startIndex < 0) startIndex = 0;
    if (endIndex > array.length - 1) endIndex = array.length - 1;

    array = array.splice(startIndex, endIndex + 1);
    let result = array.reduce((sum, el) => isNaN(el) ? NaN : sum + el, 0);
    return result;
}


// console.log(subSum('text', 0, 2));

module.exports = subSum;