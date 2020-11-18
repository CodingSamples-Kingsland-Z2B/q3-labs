/* 
Write a function to guess for a favorite book, which: 
●	Receives a favorite book's name
●	Receives book names until it reaches the favorite book
●	Prints "Book found!" and stops afterwards
●	Prints "Invalid book: " + book for all invalid books

in
    "Alice in Wonderland", 
    ["Winnie the Pooh","Alice in Wonderland" ]
out    
    Invalid book: Winnie the Pooh
    Book Found!

 */

function main(favoriteBook, bookCo) {
	let book = bookCo.shift();

	while (book != favoriteBook && book != undefined) {
		console.log(`Invalid book: ${book}`);

		book = bookCo.shift();
	}

	if (book == favoriteBook) {
		console.log("Book Found!");
	}
}

main("Alice in Wonderland", ["Winnie the Pooh", "Alice in Wonderland"]);
