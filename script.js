const buttonAddBook = document.querySelector('#buttonAddBook');
const modalAddBook = document.querySelector('#modalAddBook');
const buttonCloseModal = document.querySelector('#buttonCloseModal');
const buttonSubmit = document.querySelector('#buttonSubmit');
// Array for stored books
const myLibrary = []

/*// The Constructor
function Book(title, author, pages, read) {

	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;

	this.info = function() {
		return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
	}

	console.log(this.info());

}

// Creating new instances (objects) using the Constructor
function addBookToLibrary() {
	const newBook = new Book(
		document.querySelector('#title').value,
		document.querySelector('#author').value,
		document.querySelector('#pages').value,
		document.querySelector('#read').checked,
	);
}*/

// Create Objects inherit from 'myLibrary'

buttonAddBook.addEventListener('click', () => {
	modalAddBook.style.display = 'block';
});

buttonCloseModal.addEventListener('click', () => {
	modalAddBook.style.display = 'none';
});

buttonSubmit.addEventListener('click', () => {
	modalAddBook.style.display = 'none';
});
