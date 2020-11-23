function main(input) {
    let dest = input.shift();

    while (dest != "End") {
        //  Money needed
        let neededMoney = Number(input.shift());
        let sum = 0;
        while (true) {
            sum += Number(input.shift());
            console.log(`collected : ${sum}`);
            if (sum >= neededMoney) {
                break;
            }
        }
        console.log(`Going to ${dest}!`);
        dest = input.shift();
    }
}

main(["Bali", "3500", "800", 1800, 1000, "Brazil", "4600", 5000, "End"]);