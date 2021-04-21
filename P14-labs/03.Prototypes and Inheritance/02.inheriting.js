function main() {

    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }
        toString() {
            if (this instanceof Student) {
                return `Student (name: ${this.name}, email: ${this.email}, course: ${this.course})`
            } else if (this instanceof Teacher) {
                return `Teacher (name: ${this.name}, email: ${this.email}, subject: ${this.subject})`
            } else {
                return `Person (name: ${this.name}, email: ${this.email})`
            }
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }

    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }
    }

    return {
        Teacher,
        Student,
        Person
    }
}

let { Teacher, Student, Person } = main();
const john = new Teacher('John', 'john@gmail.com', 'Math'); // this instanceof Teacher and Person
console.log(john.toString())