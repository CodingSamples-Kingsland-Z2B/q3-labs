/******************************************** */
/*******checkGrade****************************/
/*Inputs: grade: number    ********************/
/*Outputs: grade in word (Fail, good)    ******/
/******************************************** */

function checkGrade(grade) {
    if (grade >= 2.0 && grade <= 2.99) {
        return 'Fail';
    } else if (grade >= 3.0 && grade <= 3.49) {
        return 'Poor';
    } else if (grade >= 3.5 && grade <= 4.49) {
        return 'Good';
    } else if (grade >= 4.5 && grade <= 5.49) {
        return 'Very Good';
    } else if (grade >= 5.5 && grade <= 6.0) {
        return 'Excellent';
    }
}

// call the checkGrade() and print the grade
function main(grd) {
    let wordGrade = checkGrade(grd);
    console.log(wordGrade);
}

// main(3.33);
main(4.5);
// main(2.99);