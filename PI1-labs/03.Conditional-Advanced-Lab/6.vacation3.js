function main(season, accom, days) {
    let total;
    if (accom == "Hotel") {
        switch (season) {
            case "Spring":
                total = days * 30 * 0.8;
                break;
            case "Summer":
                total = days * 50;
                break;
            case "Autumn":
                total = days * 20 * 0.7;
                break;
            case "Winter":
                total = days * 40 * 0.9;
                break;
        }
    } else if (accom === "Camping") {
        switch (season) {
            case "Spring":
                total = days * 10 * 0.8;
                break;
            case "Summer":
                total = days * 30;
                break;
            case "Autumn":
                total = days * 15 * 0.7;
                break;
            case "Winter":
                total = days * 10 * 0.9;
                break;
        }
    }
    console.log(total.toFixed(2));
}

main("Winter", "Hotel", 5);