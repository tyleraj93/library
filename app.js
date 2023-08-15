const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => {
        return read
            ? `${this.title} by ${this.author}, ${this.pages} pages, read already`
            : `${this.title} by ${this.author}, ${this.pages} pages, not read yet`;
    };
};

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
addBookToLibrary("Awaken the Giant Within", "Anthony Robbins", 538, true)
addBookToLibrary("Dune", "Frank Herbert", 884, true)

const container = document.querySelector(".grid-container");

myLibrary.forEach(book => {
    const card = document.createElement("div");
    card.classList.add("card");

    const titleSpot = document.createElement("h1");
    titleSpot.textContent = book.title;
    card.appendChild(titleSpot);

    const authorSpot = document.createElement("h2");
    authorSpot.textContent = book.author;
    card.appendChild(authorSpot);

    const pagesSpot = document.createElement("p");
    pagesSpot.textContent = book.pages;
    card.appendChild(pagesSpot);

    const readSpot = document.createElement("p");
    readSpot.textContent = book.read;
    card.appendChild(readSpot);
    container.appendChild(card);
});

const showButton = document.getElementById("showDialog");
const addBookDialog = document.getElementById("add-book-dialog");
const outputBox = document.querySelector("output");
const confirmBtn = addBookDialog.querySelector("#confirmBtn");

showButton.addEventListener("click", () => {
    addBookDialog.showModal();
});