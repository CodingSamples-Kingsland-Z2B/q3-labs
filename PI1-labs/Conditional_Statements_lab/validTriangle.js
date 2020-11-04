/* 
Write a function to check is a triangle is valid, which:
●	Receives 3 numbers: the sides of a triangle
●	Checks if each side is less than the sum of the other 2
●	Prints "Valid Triangle" if the above condition is met
●	Prints "Invalid Triangle" otherwise 
*/

function main(side1,side2,side3){
    let valid =true;

    if(side1 >= side2 + side3){
        valid = false;
    } else if (side2 >= side1 + side3){
        valid = false;
    } else if(side3 >= side1 + side2){
        valid = false;
    }

    if(valid){
        console.log("Valid Triangle");
    }else{
        console.log("Invalid Triangle");
    }
}

main(4,8,10);