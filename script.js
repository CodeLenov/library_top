const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const read = document.querySelector('#read');

const buttonAddBook = document.querySelector('#buttonAddBook');
const formAddBook = document.querySelector('#formAddBook');
const buttonCloseForm = document.querySelector('#buttonCloseForm');
const buttonSubmit = document.querySelector('#buttonSubmit');
const outputMyLibrary = document.querySelector('#outputMyLibrary');
// Array for stored books
const myLibrary = [];

// manually add a few books (book objects) for start library

const book1 = new Book('1984', 'George Orwell', '328', 'true',);
const book2 = new Book('The Ethics of Liberty', 'Murray Rothbard', '308', 'true',);
const book3 = new Book('Human Action. A Treatise on Economics', 'Ludwig von Mises', '1037', 'false',);

myLibrary.push(book1, book2, book3);

// take user's input

buttonAddBook.addEventListener('click', () => {
	title.value = '';
	author.value = '';
	pages.value = '';
	read.checked = '';
	formAddBook.style.display = 'block';
});

buttonCloseForm.addEventListener('click', () => {
	formAddBook.style.display = 'none';
});

buttonSubmit.addEventListener('click', (e) => {
	e.preventDefault();
	addBookToLibrary();
	formAddBook.style.display = 'none';
});

// store the new book objects (from user's input) into the array 'myLibrary' using the constructor

function addBookToLibrary() {

	const book = new Book(
		title.value,
		author.value,
		pages.value,
		read.checked,
	);

	myLibrary.push(book);

}

// the constructor

function Book(title, author, pages, read) {

	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;

	this.info = function() {
		return `${this.title}, by ${this.author}, ${this.pages} pages, ${this.read}<br />`;
	}

	outputMyLibrary.innerHTML += this.info();

}
