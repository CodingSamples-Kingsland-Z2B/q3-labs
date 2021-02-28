let person = {
    name: 'Andrew',
    age: 20
}

let personJSON = JSON.stringify(person);


let personObj = JSON.parse(personJSON);
console.log(personObj.name)