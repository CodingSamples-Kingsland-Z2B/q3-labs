/* 
 distance to their city in kilometers,
 calculate the gasoline consumption in liters per 100 km, 
 and the amount they have to pay for gasoline in total. 

 They only have the money earned from the tournament. 

 calc the amount earned and how much is left over.

  If not enough money, they can not go back 
  the amount is split between the 5 them.

 INPUTS
 •	On the first line is the distance in kilometers 
    - an integer in the range [0..100000]
•	On the second line is the gasoline consumption per 100 kilometers 
    - an integer in the range [0...100]
•	On the third line gasoline price per liter 
    - real number in the range [0.0...50.0]
•	The fourth row is the money they have won from the tournament 
    - an integer in the range [0...100000]

 OUTPUT
 •	If the money earned is more than or equal to the cost: 
 "You can go home. {earned money} money left."
•	If it is not enough: 
"Sorry, you cannot go home. Each will receive {share of each} money."
*/
function main(distance,litPer100Km,gasPricePerLiter,amountWon){
    
    // create a variable to track the amout of liters the car needs to get home
    let litersNeeded = distance * litPer100Km / 100 ;

    // create a variable for the amout of money it'll cost for the liters that we need to get home
    let totalCost = litersNeeded * gasPricePerLiter;


    if( amountWon >= totalCost) {
        //create a variable to find the amout left over
        let leftOver = amountWon - totalCost;
        // console.log(You can go home. {leftOver.toFixed(2) } money left.)
        console.log(`You can go home. ${leftOver.toFixed(2)} money left.`);
    } else{
        // calulate the amount each guy will get for their way home
        let share = amountWon/5;
        // print Sorry, you cannot go home. Each will receive {share.toFixed(2)} money.
        console.log('Sorry, you cannot go home. Each will receive '+ share.toFixed(2) + ' money.');
    }
}

main(100, 5, 1.2, 6);
//You can go home. 0.00 money left.
/* 
100 * 5 / 100 = 5 liters consumption of the car
5 * 1.2 price per liter = 6 money total cost
6 - 6 available = 0.00 money

*/

main(120, 5, 1.2, 4);
//Sorry, you cannot go home. Each will receive 0.80 money.
/* 
120 * 5 / 100 = 6 liters consumption of the car
6 l. * 1.2 price per liter = 7.20 total cost in money
7.20 - 4 = 3.2 less than needed 
Therefore, they will be distributed 4 money / 5 people = 0.80 each person


*/