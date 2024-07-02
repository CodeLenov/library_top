const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const read = document.querySelector('#read');

const buttonAddBook = document.querySelector('#buttonAddBook');
const modalAddBook = document.querySelector('#modalAddBook');
const buttonCloseModal = document.querySelector('#buttonCloseModal');
const buttonSubmit = document.querySelector('#buttonSubmit');
const outputMyLibrary = document.querySelector('#outputMyLibrary');
// Array for stored books
const myLibrary = [];

// manually add a few books (book objects) for start library

const book1 = new Book('1984', 'George Orwell', '328', 'true',);
const book2 = new Book('The Ethics of Liberty', 'Murray Rothbard', '308', 'true',);
const book3 = new Book('Human Action. A Treatise on Economics', 'Ludwig von Mises', '1037', 'false',);

myLibrary.push(book1, book2, book3);

// the constructor

function Book(title, author, pages, read) {

	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;

	this.info = function() {
		return `${this.title}, by ${this.author}, ${this.pages} pages, ${this.read}<br />`;
	}

	// outputLibrary.innerHTML += this.info();

}

// store the new book objects (from user's input) into the array 'myLibrary' using the constructor

function addBookToLibrary() {

	const book = new Book(
		title.value,
		author.value,
		pages.value,
		read.checked,
	);

	myLibrary.push(book);

	// outputMyLibrary.innerHTML += bookNew.info();

}

// take user's input

buttonAddBook.addEventListener('click', () => {
	title.value = '';
	author.value = '';
	pages.value = '';
	read.checked = '';
	modalAddBook.style.display = 'block';
});

buttonCloseModal.addEventListener('click', () => {
	modalAddBook.style.display = 'none';
});

buttonSubmit.addEventListener('click', () => {
	addBookToLibrary();
	modalAddBook.style.display = 'none';
});

for (everyBook of myLibrary) {
	outputMyLibrary.innerHTML = myLibrary[everyBook];
}
outputMyLibrary.innerHTML = myLibrary[1];
