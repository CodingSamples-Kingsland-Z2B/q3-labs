function main(jsonData) {
    //  Convert from json string to an object 
    let person = JSON.parse(jsonData);

    for (let i in person) {
        console.log(`${i}: ${person[i]}`);
    }


}

main('{"name": "George", "age": 40, "town": "Atlanta"}');