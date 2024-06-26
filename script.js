const button = document.querySelector('button');
// Array for stored books
const myLibrary = []

// The Constructor
function Book(title, author, pages, read) {

	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;

	this.info = function() {
		return info = (`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`);
	}

}

console.log(this.info());

function addBookToLibrary() {

	newBook = new Book(
		document.querySelector('#title').value,
		document.querySelector('#author').value,
		document.querySelector('#pages').value,
		document.querySelector('#read').checked,
	);

}

button.addEventListener('click', addBookToLibrary);
