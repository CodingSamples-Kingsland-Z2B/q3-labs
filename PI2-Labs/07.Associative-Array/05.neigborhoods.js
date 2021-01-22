// • Save the first element of the array as the neighborhoods
// • Fill the map with them and set their values as empty arrays
// • Loop through the rest of the elements
// • Check if the neighborhood is in the list/map and add the person
// • Sort them by count of inhabitants
// • Print
function main(arr) {

    // Create an empty Mp
    let map = new Map();
    // Save the first element of the array as the neighborhoods
    let neighborhoods = arr.shift().split(', ');
    neighborhoods.forEach(nh => map.set(nh, []));

    arr.forEach(item => {
        let [neighborhood, person] = item.split(' - ');
        if (neighborhoods.includes(neighborhood)) {
            map.get(neighborhood).push(person);
        }
    })

    // • Sort them by count of inhabitants
    let mapArr = Array.from(map);
    mapArr.sort((a, b) => b[1].length - a[1].length)


    // • Print
    mapArr.forEach(item => {
        console.log(`${item[0]}: ${item[1].length}`);
        item[1].forEach(person => console.log(`--${person}`))
    });
}

main(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy'
])