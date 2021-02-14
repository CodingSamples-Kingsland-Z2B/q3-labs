function main(radius) {

    // Get the type of the argument
    let type = typeof(radius);

    if (type === 'number') {
        // calculating the area 
        let area = radius ** 2 * Math.PI;
        console.log(area.toFixed(2));
        return;
    }

    // print an error message 
    console.log(`We cannot calculate the circle area, because we receive a ${type}.`)


}

main(5);