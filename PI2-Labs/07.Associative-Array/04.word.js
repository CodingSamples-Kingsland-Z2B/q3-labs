// • Create a map
// • Loop through the elements of the array of words
// • Update the map
// • Sort the map by value in descending:
// • Finally, print the result in format as the example above
function main(arr) {
    let map = new Map();
    let uniqueArr = [...new Set(arr)];
    uniqueArr.forEach(item => {
        let found = arr.filter(a => a === item);
        map.set(item, found.length)
    })

    // // Updating the map
    // for (let word of arr) {
    //     let found = arr.filter((item) => item === word)
    //     let times = found.length;
    //     map.set(word, times);
    // }

    // Sorting 
    let mapArr = Array.from(map);
    mapArr.sort((a, b) => b[1] - a[1]);

    // Print outputs 
    for (let [word, times] of mapArr) {
        console.log(`${word} -> ${times} times`)
    }

}


main(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])