/* 
Write a function to calculate an account balance 
●	Receives a sequence of incomes / expenses, until "End" is read
●	Adds the money to the balance (starting from 0) and print "Increase: {money} " or "Decrease: {money}"
●	Finally, prints the account balance (like shown below)
Example
Input	
    [500,15.5,-80.35,"End"]

Output
    Increase: 500.00
    Increase: 15.50
    Decrease: 80.35
    Balance: 435.15
 */

function main(incExpens) {
	let balance = 0;
	let transaction = incExpens.shift();
	while (transaction != "End" && transaction != undefined) {
		balance += transaction;

		if (transaction >= 0) {
			console.log(`Increase: ${transaction.toFixed(2)}`);
		} else {
			console.log(`Decrease: ${Math.abs(transaction).toFixed(2)}`);
		}
		transaction = incExpens.shift();
	}

	console.log(`Balance: ${balance.toFixed(2)}`);
}

main([500, 15.5, -80.35, "End"]);
