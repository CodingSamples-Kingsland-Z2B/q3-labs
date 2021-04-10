class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return this.firstName + ' ' + this.lastName
    }

    set fullName(value) {
        let [first, last] = value.split(' ')

        // Method 1
        // if (last) {
        //     this.firstName = first;
        //     this.lastName = last;
        // }

        // Method 2
        if (!last) {
            return;
        }

        this.firstName = first;
        this.lastName = last;
    }
}

let person = new Person("Peter", "Ivanov");