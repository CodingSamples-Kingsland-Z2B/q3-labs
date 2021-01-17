// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let firstEl = nums[0];
// let secondEl = nums[1];

// // Destructuring Array 

// let [firstItem, secondItem] = nums;

// console.log(firstItem, secondItem);


// Destructuring Objects 
let person = {
    name: 'John',
    age: 30,
    state: 'NY'
}

// let name = person.name;
// let age = person.age;
// let state = person.state;

let { name, age, state } = person;

function main({ state, name, age }) {
    console.log(name);
}

main(person);


let arr1 = [1, 2, 3, 4];
let arr2 = [...ar1]

let obj1 = { name: 'Suan', age: 24 }
let obj2 = {...obj1 }