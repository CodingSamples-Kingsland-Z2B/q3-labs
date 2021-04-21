class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}


function main(classToExtend) {
    classToExtend.prototype.species = 'Human';
    classToExtend.prototype.toSpeciesString = function() {
        return `I am a ${this.species}. ${this.toString()}`
    }

}

main(Person);
let p = new Person('john doe', 'doe@mail.com');
console.log(p.toSpeciesString());