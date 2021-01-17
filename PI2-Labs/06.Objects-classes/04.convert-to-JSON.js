function main(fName, lName, hColor) {

    // Create the Object 
    let person = {
        firstNname: fName,
        lastName: lName,
        hairColor: hColor
    }

    // Convert the Object to JSON string 
    let personJSON = JSON.stringify(person);
    // Print the json data
    console.log(personJSON);

}

main('George',
    'Jones',
    'Brown');