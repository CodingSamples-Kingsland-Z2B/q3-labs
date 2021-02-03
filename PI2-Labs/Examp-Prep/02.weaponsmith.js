function main(arr) {

    // Get the particles names 1st element in the array 
    let particles = arr.shift().split('|');
    // Get the first command in the array and convert it to array
    let [command, input, index] = arr.shift().split(' ');
    //loop through the commands 
    while (command !== 'Done') {
        // Make sure that the index is a number 
        index = +index;
        switch (command) {
            case 'Move':
                if (input === 'Right' && particles[index + 1]) {
                    let temp = particles[index];
                    particles[index] = particles[index + 1];
                    particles[index + 1] = temp;
                    // particles = particles.join(',')
                    //     .replace(particles[index + 1], particles[index])
                    //     .replace(particles[index], particles[index + 1])
                    //     .split(',')
                } else if (input === 'Left' && particles[index - 1]) {
                    let temp = particles[index];
                    particles[index] = particles[index - 1];
                    particles[index - 1] = temp;
                }
                break;
            case 'Check':
                if (input === 'Odd') {
                    let odd = particles.filter(function(value, index) {
                        return index % 2 != 0;
                    });
                    console.log(odd.join(' '));
                } else if (input === 'Even') {
                    let even = particles.filter((particle, index) => index % 2 === 0);
                    console.log(even.join(' '));
                }
                break;
        }

        // Get the next command 
        [command, input, index] = arr.shift().split(' ');
    }

    console.log(`You crafted ${particles.join('')}!`);

}


main([`ha|Do|mm|om|er`,
    `Move Right 0`,
    `Move Left 3`,
    `Check Odd`,
    `Move Left 2`,
    `Move Left 10`,
    `Move Left 0`,
    `Done`
])