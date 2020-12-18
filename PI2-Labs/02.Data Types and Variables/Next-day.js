function main(year, month, day) {
    let date = new Date(`${month}/${day}/${year}`); // 9/30/2016

    let nextDay = date.getDate() + 1;
    date.setDate(nextDay); //get next day
    console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`);
}

main(2016, 9, 30);