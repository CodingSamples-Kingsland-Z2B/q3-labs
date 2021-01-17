// The input will be in the following order: name, area, population, country and ZIP code.

function main(name, area, pop, country, zip) {

    // Create the city Object 
    let city = {
        name: name,
        area: area,
        population: pop,
        country: country,
        postCode: zip
    }

    // Get the entries array 
    let entries = Object.entries(city);
    console.log(entries);
    // entries.forEach(entry => {
    //     console.log(`${entry[0]} -> ${entry[1]}`)
    // })

    for (let [key, value] of entries) {
        console.log(`${key} -> ${value}`)
    }

    for (let entry of entries) {
        let key = entry[0];
        let value = entry[1];
        console.log(`${key} -> ${value}`)
    }

    for (let key in city) {
        console.log(`${key} -> ${city[key]}`)
    }
}


main("Atlanta", "343", "416474", "USA", "404")