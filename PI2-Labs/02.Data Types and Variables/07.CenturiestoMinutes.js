/*
Write program to receive a number of centuries and convert it to years, days, hours and minutes. 
Assume that a year has 365.2422 days at average
*/

function main(centuries) {
    let years = centuries * 100;
    //let days = Math.trunc(years * 365.2422);
    let days = parseInt(years * 365.2422);
    let hours = days * 24;
    let min = hours * 60;

    console.log(
        `${centuries} centuries = ${years} years = ${days} days = ${hours} hours = ${min} minutes`
    );
}
main(5);