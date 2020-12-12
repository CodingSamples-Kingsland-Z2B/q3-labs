//Write a program, which prints the language, that a given country speaks.
// You can receive only the following combinations: English is spoken in England and USA;
//  Spanish is spoken in Spain, Argentina and Mexico; for the others, we should print "unknown".

function main(country) {
    if (country === 'USA' || country === 'England') {
        console.log('English');
    } else if (
        country === 'Spain' ||
        country === 'Argentina' ||
        country === 'Mexico'
    ) {
        console.log('Spanish');
    } else {
        console.log('unknown');
    }
}

main('USA');
main('Germany');