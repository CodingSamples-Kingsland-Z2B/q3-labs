/* 
Write a function to calculate ticket price, which:
    ● Receives a ticket type: either "student" or "regular"
    ● Prints the price in the following format "${price}":
        ○ Student ticket price: 1.00
        ○ Regular ticket price: 1.60
        ○ For invalid type "Invalid ticket type!"
*/

function main(ticketType){
    
    if(ticketType === "student"){
        let price = 1.00;
        console.log(`Student ticket price: ${price}`);
    }
    else if(ticketType === "regular"){
        let price = 1.60;
        console.log(`Regular ticket price: ${price}`);
    }
    else{
        console.log("Invalid ticket type!");
    }
}

main("student");
main("regular");