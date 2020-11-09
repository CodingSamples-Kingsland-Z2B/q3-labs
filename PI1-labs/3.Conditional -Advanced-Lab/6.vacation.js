function main(season, accom, days) {
    let total;
    if (season === "Spring") {
        if (accom === "Hotel") {
            total = days * 30 * 0.8;
        } else if (accom == "Camping") {
            total = days * 10 * 0.8;
        }
    } else if (season === "Summer") {
        if (accom === "Hotel") {
            total = days * 50;
        } else if (accom == "Camping") {
            total = days * 30;
        }
    } else if (season === "Autumn") {
        if (accom === "Hotel") {
            total = days * 20 * 0.7;
        } else if (accom == "Camping") {
            total = days * 15 * 0.7;
        }
    } else if (season === "Winter") {
        if (accom === "Hotel") {
            total = days * 40 * 0.9;
        } else if (accom == "Camping") {
            total = days * 10 * 0.9;
        }
    }
    console.log(total.toFixed(2));
}

main("Winter", "Hotel", 5);