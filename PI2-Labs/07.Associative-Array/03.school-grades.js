function main(arr) {

    let map = new Map();
    for (let item of arr) {
        // Get the name 
        // let itemsArr = item.split(' ');
        // console.log(itemsArr);
        // let name = itemsArr.shift();
        // let grades = itemsArr.map(Number);
        // console.log(name, grades)
        let [name, ...grades] = item.split(' ');
        grades = grades.map(Number);

        if (!map.has(name)) {
            // Add to the map
            map.set(name, grades);
        } else {
            let oldGrades = map.get(name);
            let newGrades = oldGrades.concat(grades);
            // let newGrades = [...oldGrades, ...grades];
            map.set(name, newGrades);
        }
    }


    let mapArr = Array.from(map);
    mapArr.sort((a, b) => {
        let suma = 0;
        let sumb = 0;
        a[1].forEach(item => suma += item);
        b[1].forEach(item => sumb += item);
        let averageA = suma / a[1].length;
        let averageB = sumb / b[1].length;
        return averageA - averageB;
    })

    // Iterate to print the map 
    for (let [key, value] of mapArr) {
        console.log(`${key}: ${value.join(', ')}`)
    }
}

main(['Lilly 4 6 6 5', 'Tim 5 6', 'Tammy 2 4 3', 'Tim 6 6'])