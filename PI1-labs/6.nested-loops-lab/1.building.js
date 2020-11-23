function main(floors, apts) {
    // Floors loop
    for (let f = floors; f >= 1; f--) {
        let result = "";
        // Apts loop
        for (let a = 0; a < apts; a++) {
            // if the floor is even and not Top floor
            if (f % 2 === 0 && f !== floors) {
                result += `O${f}${a} `;
                // The last floor
            } else if (f === floors) {
                result += `L${f}${a} `;
                // the floor is odd
            } else {
                result += `A${f}${a} `;
            }
        }
        console.log(result);
    }
}

// main(6, 4);
main(5, 3);