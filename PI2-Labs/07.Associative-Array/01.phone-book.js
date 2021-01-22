function main(arr) {

    // Create an Empty Object (Associative Array)
    let phoneBook = {};

    // Iterate through the inputs to store the data in Associative Array 
    for (let item of arr) {
        // Get the name and number from the string 
        // By converting the string to array using split() on space
        let name = item.split(' ')[0];
        let number = item.split(' ')[1];
        // let [name, number] = item.split(' ');
        // Store key/value in associative array
        phoneBook[name] = number;
    }

    // Iterate to print the associative array 
    for (let key in phoneBook) {
        console.log(`${key} -> ${phoneBook[key]}`);
    }
}

main(['Tim 0834212554', 'Peter 0877547887', 'Bill 0896543112', 'Tim 0876566344'])