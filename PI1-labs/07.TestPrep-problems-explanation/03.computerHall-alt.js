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

function main(month, numHoursSpent, numOfPPL, timeOfDay) {
	//check the month to get the price
	let price = 0;
	//let season ="";
	// if else if else...
	// if( month == March || month == April || month == May)
	//     season ="spring";      // do a thing
	// else if(month == June || month == July || month == August)
	// season = "fall"   // do the thing
	// switch
	switch (month) {
		case "March":
		case "April":
		case "May":
			//check time of day
			if (timeOfDay === "day") {
				price = 10.5;
				//does number of ppl qualify for a discount
			} else if (timeOfDay == "night") {
				//do the night thing
				price = 8.4;
				//does number of ppl qualify for a discount
			}
			break;
		case "June":
		case "July":
		case "August":
			//check time of day
			if (timeOfDay == "day") {
				price = 12.6;
			} else if (timeOfDay == "night") {
				price = 10.2;
				//does number of ppl qualify for a discount
			}
			break;
	}
	//does number of ppl qualify for a discount
	if (numOfPPL >= 4) {
		//the cost per person is reduced by 10%
		//price - 10 %
		price -= price * 0.1;
	}
	//does number of hours qualify for a discount
	if (numHoursSpent >= 5) {
		//the cost per person is reduced by 50%
		//price - 50 %
		price -= price * 0.5;
	}

	//print out the final price per person
	console.log(`Price per person for one hour: ${price.toFixed(2)}`);
	// calulate the total
	let total = price * numOfPPL * numHoursSpent;
	//print the total price
	console.log(`Total cost of the visit: ${total.toFixed(2)}`);
}

main("March", 3, 3, "day");
console.log("___________");
main("July", 5, 5, "night");
//Price per person for one hour: 10.50
//Total cost of the visit: 94.50

/* 
The price is 10.50. (March day) per person.
(10.50 * 3) * 3 = 94.50 total price for the whole visit
 */
