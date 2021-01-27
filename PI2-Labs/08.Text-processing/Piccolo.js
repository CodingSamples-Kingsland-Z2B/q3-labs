// Write function that:
// • Records a car number for every car that enters the parking lot
// • Removes a car number when the car goes out
// • Input will be array of strings in format [direction, carNumber]
// Print the output with all car numbers which are in the parking lot sorted in ascending by number

function main(arr) {

    // Create an empty map
    let map = new Map();

    // Loop through the array items 
    arr.forEach(item => {
        //get the direction and carNumber 
        let [direction, carNumber] = item.split(', ');
        map.set(carNumber, direction);
    })

    // Create an array of the map
    let mapArr = Array.from(map);

    // Filter only in cars 
    let inCars = mapArr
        .filter(([carNumber, direction]) => direction === 'IN')
        .map(([carNumber, direction]) => [carNumber, carNumber.slice(2, 6)])

    if (inCars.length > 1) {
        inCars.sort((a, b) => a[1] - b[1]);
        inCars.forEach(item => console.log(item[0]));
    } else {
        console.log('Parking Lot is Empty');
    }
}

main(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'
])