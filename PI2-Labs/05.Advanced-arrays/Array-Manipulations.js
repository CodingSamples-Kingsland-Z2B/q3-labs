function main(inputArr) {
    // get the array to manipulate
    let arr = inputArr.shift().split(' ').map(Number);

    // iterate through the commands
    inputArr.forEach((command) => {
        // get the command arguments
        let [com, num, index] = command.split(' ');

        // Convert to numbers
        num = Number(num);
        index = Number(index);

        switch (com) {
            case 'Add':
                arr.push(num);
                break;
            case 'Remove':
                arr = arr.filter((el) => el !== num);
                break;
            case 'RemoveAt':
                arr.splice(num, 1);
                break;
            case 'Insert':
                arr.splice(index, 0, num);
                break;
        }
    });

    console.log(arr.join(' '));
}

main(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3']);