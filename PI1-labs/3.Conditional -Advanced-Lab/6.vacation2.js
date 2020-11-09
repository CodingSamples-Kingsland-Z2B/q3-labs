function main(season, accom, days) {
    let total;

    if (season === "Spring" && accom === "Hotel") {
        total = days * 30 * 0.8;
    } else if (season === "Spring" && accom == "Camping") {
        total = days * 10 * 0.8;
    } else if (season === "Summer" && accom == "Hotel") {
        total = days * 50;
    } else if (season === "Summer" && accom == "Camping") {
        total = days * 30;
    } else if (season === "Autumn" && accom == "Hotel") {
        total = days * 20 * 0.7;
    } else if (season === "Autumn" && accom == "Camping") {
        total = days * 15 * 0.7;
    } else if (season === "Winter" && accom == "Hotel") {
        total = days * 40 * 0.9;
    } else if (season === "Winter" && accom == "Camping") {
        total = days * 10 * 0.9;
    }
    console.log(total.toFixed(2));
}

main("Winter", "Hotel", 5);