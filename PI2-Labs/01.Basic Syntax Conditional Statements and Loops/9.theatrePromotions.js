//A theatre is doing a ticket sale,
//but they need a program to calculate the price of a single ticket.
// If the given age does not fit one of the categories,
//you should print "Error!".
//You can see the prices in the table below:

function main(dayType, age) {
    if (age >= 0 && age <= 18) {
        switch (dayType) {
            case 'Weekday':
                console.log('12$');
                break;
            case 'Weekend':
                console.log('15$');
                break;
            case 'Holiday':
                console.log('5$');
                break;
        }
    } else if (age > 18 && age <= 64) {
        switch (dayType) {
            case 'Weekday':
                console.log('18$');
                break;
            case 'Weekend':
                console.log('20$');
                break;
            case 'Holiday':
                console.log('12$');
                break;
        }
    } else if (age > 64 && age <= 122) {
        switch (dayType) {
            case 'Weekday':
                console.log('12$');
                break;
            case 'Weekend':
                console.log('15$');
                break;
            case 'Holiday':
                console.log('10$');
                break;
        }
    } else {
        console.log('Error!');
    }
}

main('Weekday', 42);
main('Holiday', -12);
main('Holiday', 15);