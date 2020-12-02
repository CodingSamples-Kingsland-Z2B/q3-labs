/* 
        -while loop quesiton-
    He rents a hall and buys N computers
    He begins transferring the computers. 
    calculates the free space in the room after John moves the computers.
    
    Note: One computer is of exact size:  1m. x 1m. x 1m.

INPUT
•	Width of free space 
        - integer in range [1...1000];
•	Length of free space 
        - an integer in the range [1...1000];
•	Height of free space 
        - an integer in the range [1...1000];
•	On the following lines (until the "Done" command is received) - number of computers that are transferred to the hall - integer numbers in the range [1...10000];
The program must end reading data at command "Done" or if there is no free space left.

OUTPUT
•	If you reach the "Done" command and there is still free space:
"{free space} Cubic meters left."
•	If there is no more free space before the "Done" command is received: 
"No more free space! You need {space needed} Cubic meters more."

*/

function main(fSWidth, fSLength, fSHeight, incomingComputers) {
	//get the total space available
	let totalSpaceAvailable = fSWidth * fSLength * fSHeight;

	//get the space the computers are goign to take up
	let computerSpace = 0;

	//track each delivery
	let computerdelivery = incomingComputers.shift();

	while (computerdelivery != "Done" && computerdelivery != undefined) {
		//  !(a && b) <=> !a || !b
		// add in the dilevery
		// if (computerdelivery == "Done" || computerdelivery == undefined) {
		// 	break;
		// }
		computerSpace += computerdelivery;

		computerdelivery = incomingComputers.shift();
	}

	//check the total computer space minus the total space available to see if we have enough space
	// If you reach the "Done" command and there is still free space:
	if (totalSpaceAvailable >= computerSpace) {
		//calc the available free space
		let freeSpace = totalSpaceAvailable - computerSpace;
		//print  "{(totalSpaceAvailable - computerSpace)} Cubic meters left."
		console.log(`${freeSpace} Left space.`);
	} else {
		// If there is no more free space before the "Done" command is received:
		let neededFreeSpace = computerSpace - totalSpaceAvailable;
		// "No more free space! You need {Math.abs(totalSpaceAvailable - computerSpace)} Cubic meters more."
		console.log(
			`No more free space! You need ${neededFreeSpace} Cubic meters more.`
		);
	}
}

main(10, 10, 2, [20, 20, 20, 20, 122]);

main(10, 1, 2, [4, 6, "Done"]);
