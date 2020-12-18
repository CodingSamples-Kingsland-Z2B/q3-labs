function main(distance, people, fuelPrice) {
    // Fuel with no passengers only the diver
    let fuel = (distance / 100) * 7;
    // Fuel required basedon the number of passengers
    fuel += people * 0.1;
    let money = fuel * fuelPrice;
    console.log(`Needed money for that trip is ${money}lv.`);
}
//main(260, 9, 2.49);
main(90, 14, 2.88);