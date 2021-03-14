// Write a class that represents a personal record. It has the following properties, all set from the constructor:
// ● firstName
// ● lastName
// ● age
// ● email
// And a method toString() , which prints a summary of the information. See the example for formatting details.

// The toString() method should return a string in the following format:
// "{firstName} {lastName} (age: {age}, email: {email})" Example


class Person {
    constructor(fName, lName, age, email) {
        this.firstName = fName;
        this.lastName = lName;
        this.age = age;
        this.email = email;
    }

    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }
}

let person = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
console.log(person.toString());