/* 
Write a function to check for boiling water, which: 
    ● Receives a number: the water temperature (in °C)
    ● Prints "The water is boiling" if the number > 100
    ● Prints "The water is not hot enough" in all other cases 
*/

function main(temperature){

    if(temperature >=100){
        console.log("The water is boiling");
    }
    else{
        console.log("the water is not hot enough");
    }
}

main(104.8);
main(29);