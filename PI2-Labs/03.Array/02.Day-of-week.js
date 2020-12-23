// Write a program which receives a number and prints the corresponding name of the day of week.
// If the number is NOT a valid day, print '
// Invalid day!'.

function main(n) {
    let days = [
        'Monday', // index 0   - user enter 1
        'Tuesday', // index 1   - user enter 2
        'Wednesday', // index 2
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
    ];
    if (n >= 1 && n <= 7) {
        console.log(days[n - 1]);
    } else {
        console.log('Invalid Day!');
    }
}

main(3);
main(6);
main(11);