// You will be given 3 parameters:
//   student name (string),
//   age (number) and
//   average grade (number).

// Your task is to print all the info about the student in the following format.
// The grade should be formatted to the second decimal point:
// "Name: {student name}, Age: {student age}, Grade: {student grade}".

function main(name, age, grade) {
    console.log(`Name: ${name}, Age: ${age}, Grade: ${grade.toFixed(2)}`);
}

main('John', 15, 5.54678);
main('Steve', 16, 2.1426);
main('Marry', 12, 6.0);