function main(biscuits, workers, otherBiscuits) {
    // Every third day in month (total of 10 Days/ Month)
    //  (number of biscuits * number of workers * 75 %of your regular production)*10 days
    let thirdDayProduction = Math.floor(biscuits * workers * 0.75) * 10;
    //  number of biscuits * number of workers * 20 days  
    let regularProduction = Math.floor(biscuits * workers * 20);

    // Total amount of biscuits per month 
    let totalBiscuitsPerMonth = thirdDayProduction + regularProduction;
    // print    You have produced {total biscuits} biscuits for the past month.   
    console.log(`You have produced ${totalBiscuitsPerMonth} biscuits for the past month.`);

    // Calculate the percentange difference between your company and other company 
    let percentage = Math.abs(((totalBiscuitsPerMonth - otherBiscuits) / otherBiscuits) * 100).toFixed(2);

    if (totalBiscuitsPerMonth > otherBiscuits) {
        console.log(`You produce ${percentage} percent more biscuits.`)
    } else {
        console.log(`You produce ${percentage} percent less biscuits.`)
    }

    // console.log(`You produce ${percentage} percent  ${totalBiscuitsPerMonth > otherBiscuits ? 'more' :'less'} biscuits.`)

}
main(65, 12, 26000)