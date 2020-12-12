// Write a function that receives a single number and checks if the grade is excellent or not.
// If it is, print "Excellent", otherwise print "Not excellent"

function main(num) {
    if (num >= 5.5) {
        console.log('Excellent');
    } else {
        console.log('Not excellent');
    }
}

main(5.5);
main(4.35);