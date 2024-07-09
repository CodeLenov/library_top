// 1. Declarate variables
	// 1.1. Manually add a few books (book objects) for start library
// 2. Take user's input
// 3. Store the new book (objects from user's input) into the array 'myLibrary' using the constructor
// 4. Toggle read status
// 5. Remove a book
// 6. Output myLibrary

// ----------------------------------------------------------------------
// !!! 1. Declarate variables
const buttonAddBook = document.querySelector('#buttonAddBook');
const formAddBook = document.querySelector('#formAddBook');
const buttonCloseForm = document.querySelector('#buttonCloseForm');
const buttonSubmit = document.querySelector('#buttonSubmit');
const outputMyLibrary = document.querySelector('#outputMyLibrary');

const myLibrary = []; // array for stored books

// ----------------------------------------------------------------------
// 1.1. Manually add a few books (book objects) for start library (using the constructor)

const book1 = new Book('1984', 'George Orwell', '328', 'true',);
const book2 = new Book('The Ethics of Liberty', 'Murray Rothbard', '308', 'true',);
const book3 = new Book('Human Action. A Treatise on Economics', 'Ludwig von Mises', '1037', 'false',);

myLibrary.push(book1, book2, book3);

displayMyLibrary();

// ----------------------------------------------------------------------
// 2. Take user's input

buttonAddBook.addEventListener('click', () => {

	title.value = '';
	author.value = '';
	pages.value = '';
	read.checked = '';

	if (formAddBook.style.display === 'block') {
		formAddBook.style.display = 'none';
	} else {
		formAddBook.style.display = 'block';
	}
	
});

buttonCloseForm.addEventListener('click', () => {
	formAddBook.style.display = 'none';
});

buttonSubmit.addEventListener('click', (e) => {
	e.preventDefault();
	addBookToLibrary();
	formAddBook.style.display = 'none';
});

// ----------------------------------------------------------------------
// 3. Store the new book (objects from user's input) into the array 'myLibrary' using the constructor

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

function addBookToLibrary() {

	const title = document.querySelector('#title');
	const author = document.querySelector('#author');
	const pages = document.querySelector('#pages');
	const read = document.querySelector('#read');

	const newBook = new Book(title.value, author.value, pages.value, read.checked);

	myLibrary.push(newBook);

	displayMyLibrary();

}

// ----------------------------------------------------------------------
// 4. Toggle read status

Book.prototype.toggleRead = function() {
	this.read = !this.read;
}

function toggleRead(index) {
	myLibrary[index].toggleRead();
	displayMyLibrary();
}

// ----------------------------------------------------------------------
// 5. Remove a book

function removeBook(index) {
	myLibrary.splice(index, 1);
	displayMyLibrary();
}

// ----------------------------------------------------------------------
// 6. Output myLibrary

function displayMyLibrary() {

	outputMyLibrary.innerHTML = '';

	for (let i = 0; i < myLibrary.length; i++) {	
		let book = myLibrary[i];
		let divBook = document.createElement('div');
		divBook.setAttribute("class", "divBook");
		outputMyLibrary.appendChild(divBook);
		divBook.innerHTML = `
			<div class="divBookHeader">
				<h3 class="title">${book.title}<h3>
				<h4 class="author">by ${book.author}</h4>
			</div>
			<div class="divBookMain">
				<p class="pages">${book.pages} pages</p>
				<p class="read"><em>${book.read ? "Read" : "Not Read"}</em></p>
			</div>
			<div class="divButtons">
				<button class="buttonToggleRead" onclick="toggleRead(${i})" type="button">Read / Not Read</button>
				<button class="buttonRemoveBook" onclick="removeBook(${i})" type="button">Remove Book</button>
			</div>
		`;
	}

}
