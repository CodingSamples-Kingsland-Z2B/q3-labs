function main(day) {


    let days = [null, 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    let index = days.indexOf(day);

    if (index == -1) {
        console.log('error');
        return;
    }

    console.log(index);
}


main('Invalid');