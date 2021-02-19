function main(arr) {
    let towns = {};

    arr.forEach((townStr) => {
        let [townName, townPop] = townStr.split(' <-> ');

        // check if it is in the tows object or not
        if (towns.hasOwnProperty(townName)) {
            //  Adding pop (existing town)
            towns[townName] += Number(townPop);
        } else {
            // Add (new Town)
            towns[townName] = Number(townPop);
        }
    });

    // Loop to format the output 
    for (let key in towns) {
        console.log(`${key}: ${towns[key]}`);
    }

}

main(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'
]);