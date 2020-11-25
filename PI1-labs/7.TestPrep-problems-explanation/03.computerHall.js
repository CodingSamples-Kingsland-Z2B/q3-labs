/* 
Fees  depend on the time of day - either day or night,
Fees  depend on the month 

        March, April, May	June, July, August
Day	    10.50 per hour	    12.60 per hour
Night	8.40 per hour	    10.20 per hour

discounts:
•	if a group >= 4 
     the cost per person is reduced by 10%
•	if hours  >= 5 
        price is reduced by 50% per person


    calculate the price per person per hour 
    the total amount. 


INPUTS
•	On the first line 
    - the month - a text with options "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
•	On the second line 
    - the number of hours spent, an integer [1...10]
•	On the third line 
    - the number of people in the group, an integer [1...10]
•	The fourth line 
    - time of the day - either "day" or "night" 

    OUTPUT

    •	On the first line:
         "Price per person for one hour: {price per person per hour}"

    •	On the second line: 
        "Total cost of the visit: {total price}"

    The price should be rounded to the second decimal place.

*/

function main(month, numHoursSpent, numOfPPL, timeOfDay ){
    //check the month to get the price
    // if else if else...
        //if( month == March || month == April || month == May)
            // do a thing
        //else if(month == June || month == July || month == August)
            // do the thing
    // switch
    // switch(month)
    //      case March:
    //      case April:
    //      case May:
                //check time of day
                //if(timeOfDay === day){
                    //let price = 10.50
                    //does number of ppl qualify for a discount
                    //if(numOfPPL >= 4){
                        //the cost per person is reduced by 10%
                        //price - 10 %
                        //price -= price * 0.1;
                    // } 
                    //does number of hours qualify for a discount
                    // if(numHoursSpent  >= 5 ){
                         //the cost per person is reduced by 50%
                        //price - 50 %
                        //price -= price * 0.5;
                    // }

                    //print out the final price per person
                    // calulate the total
                    // let total = price * numOfPPL * numHoursSpent
                    //print the total price
                 
                //} else if (timeOfDay == night){
                    //do the night thing
                    //let price = 8.40
                    //does number of ppl qualify for a discount
                    //if(numOfPPL >= 4){
                        //the cost per person is reduced by 10%
                        //price - 10 %
                        //price -= price * 0.1;
                    // } 
                    //does number of hours qualify for a discount
                    // if(numHoursSpent  >= 5 ){
                         //the cost per person is reduced by 50%
                        //price - 50 %
                        //price -= price * 0.5;
                    // }

                    //print out the final price per person
                    // calulate the total
                    // let total = price * numOfPPL * numHoursSpent
                    //print the total price
                //}                
                //break;
    //      case June:
    //      case July:
    //      case August:
                 //check time of day
                //if(timeOfDay == day){
                   //let price =  12.60;
                    //does number of ppl qualify for a discount
                    //if(numOfPPL >= 4){
                        //the cost per person is reduced by 10%
                        //price - 10 %
                        //price -= price * 0.1;
                    // } 
                    //does number of hours qualify for a discount
                    // if(numHoursSpent  >= 5 ){
                         //the cost per person is reduced by 50%
                        //price - 50 %
                        //price -= price * 0.5;
                    // }

                    //print out the final price per person
                    // calulate the total
                    // let total = price * numOfPPL * numHoursSpent
                    //print the total price 
                //} else if (timeOfDay == night){
                    //let price = 10.20
                     //does number of ppl qualify for a discount
                    //if(numOfPPL >= 4){
                        //the cost per person is reduced by 10%
                        //price - 10 %
                        //price -= price * 0.1;
                    // } 
                    //does number of hours qualify for a discount
                    // if(numHoursSpent  >= 5 ){
                         //the cost per person is reduced by 50%
                        //price - 50 %
                        //price -= price * 0.5;
                    // }

                    //print out the final price per person
                    // calulate the total
                    // let total = price * numOfPPL * numHoursSpent
                    //print the total price
                //}
                //break;
            
}




main("March", 3, 3, "day" );
//Price per person for one hour: 10.50
//Total cost of the visit: 94.50

/* 
The price is 10.50. (March day) per person.
(10.50 * 3) * 3 = 94.50 total price for the whole visit
 */