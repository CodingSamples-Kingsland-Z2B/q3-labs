function Person(firstName, lastName) {

    this.firstName = firstName;
    this.lastName = lastName;
    Object.defineProperty(this, 'fullName', {

        set(value) {
            [this.firstName, this.lastName] = value.split(' ');
        },
        get() {
            return this.firstName + ' ' + this.lastName;
        }
    })
}

const john = new Person('Albert', 'Smith ');
john.fullName = 'John Doe';
console.log(john);