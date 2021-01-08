function checkGrade(grade) {
    let lowerLimitArr = [2.0, 3.0, 3.5, 4.5, 5.5];
    let upperLimitArr = [2.99, 3.49, 4.49, 5.49, 6.0];
    let grades = ['Fail', 'Poor', 'Good', 'Very Good', 'Excellent'];

    for (let i = 0; i < grades.length; i++) {
        if (grade >= lowerLimitArr[i] && grade <= upperLimitArr[i]) {
            return grades[i];
        }
    }
}

// call the checkGrade() and print the grade
function main(grd) {
    let wordGrade = checkGrade(grd);
    console.log(wordGrade);
}

main(4.5);