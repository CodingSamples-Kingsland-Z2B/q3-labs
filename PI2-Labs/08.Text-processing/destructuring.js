// let person = ['Mike', 29, 'New York', true, 4]

// let name = person[0];
// let age = person[1];
// let state = person[2];
// let isMarried = person[3];
// let numKids = person[4];


// let [, , state, isMarried, numKids] = person;
// console.log(state);


// speedLimit(person)

// function personSummary([name, age, state, m, kids]) {
//     console.log(`Hi My name is ${name} I am ${age} and living in ${state}, I am also haave ${kids} kids`)

// }




let car = {

    make: 'Toyota',
    model: 'Rav4',
    year: 2019,
    vin: 13244354666
}

// let make = car.make;
// let model = car.model;

let { make, model } = car;

console.log(make, model);