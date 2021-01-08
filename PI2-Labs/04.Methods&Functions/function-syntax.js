// Function statement
function checkNum(num) {
    if (num >= 0) {
        console.log(true);
    } else {
        console.log(false);
    }
}

// Function Expression
// let checkNum = function(num) {
//     if (num >= 0) {
//         return true;
//     }
//     return false;
// };

// Arrow Function
// let checkNum = (num) => {
//     if (num >= 0) {
//         return true;
//     }
//     return false;
// };

let add = (a, b) => a + b;

checkNum(-3);