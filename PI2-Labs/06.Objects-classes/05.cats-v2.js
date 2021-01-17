// Create Cat class
class Cat {
    // Constructor method/function 
    constructor(name, age) {
        // Create properties using constructor inputs 
        this.name = name;
        this.age = age;
    }

    // Create methods/functions 
    meow() {
        console.log(`${this.name}, age ${this.age} says Meow`)
    }
}


function main(arr) {
    // Create an array that will hold the cat objects
    let cats = [];

    // Iterate throught the input array to access each cat data 
    arr.forEach((cat) => {
        // create an array of [cat_name, cat_age] 
        let catData = cat.split(' ');
        // Getting the name and age from the array 
        let [name, age] = catData;
        // Create the cat object and push it inside the cats array
        cats.push(new Cat(name, age));
    })

    // Iterate throught cats array to call each cat method meow()
    cats.forEach(cat => {
        cat.meow();
    })

}

main(['Mellow 2', 'Tom 5']);