// The input comes as 3 separate strings in the following order: firstName, lastName, age.

function main(firstName, lastName, age) {

    // Create Person Object 
    let person = {
        firstName,
        lastName: lastName,
        age: age
    }

    // Using for in to iterate through Object Person
    // for (let key in person) {
    //     console.log(`${key}: ${person[key]}`)
    // }

    // get an array of entries [key, value] 
    // let entries = Object.entries(person);
    // console.log(entries);

    // Using for of to iteration through entries array 
    for (let [key, value] of entries) {
        console.log(`${key}: ${value}`);
    }

    // Get the keys 
    // let keys = Object.keys(person);
    // keys.forEach(key => {
    //     console.log(`${key}: ${person[key]}`)
    // });
}

main("Peter", "Pan", "20")