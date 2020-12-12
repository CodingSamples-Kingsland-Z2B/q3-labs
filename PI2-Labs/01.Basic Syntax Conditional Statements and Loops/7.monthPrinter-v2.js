// Write a program, which takes an integer from the console and prints the corresponding month.
// If the number is more than 12 or less than 1 print "Error!"

function main(n) {
    if (n === 1) {
        console.log('January');
    } else if (n === 2) {
        console.log('February');
    } else if (n === 3) {
        console.log('March');
    } else if (n === 4) {
        console.log('April');
    } else if (n === 5) {
        console.log('May');
    } else if (n === 6) {
        console.log('June');
    } else if (n === 7) {
        console.log('July');
    } else if (n === 8) {
        console.log('August');
    } else if (n === 9) {
        console.log('September');
    } else if (n === 10) {
        console.log('October');
    } else if (n === 11) {
        console.log('November');
    } else if (n === 12) {
        console.log('December');
    } else {
        console.log('Error!');
    }
}

main(2);
main(-12);