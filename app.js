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

const container = document.querySelector(".table-container");

const table = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");

table.appendChild(thead);
table.appendChild(tbody);

const headerRow = document.createElement("tr");
["Title", "Author", "Pages", "Read"].forEach(headerText => {
    const th = document.createElement("th");
    th.textContent = headerText;
    headerRow.appendChild(th);
});
thead.appendChild(headerRow);

myLibrary.forEach(book => {
    const row = document.createElement("tr");

    const titleCell = document.createElement("td");
    titleCell.textContent = book.title;
    row.appendChild(titleCell);

    const authorCell = document.createElement("td");
    authorCell.textContent = book.author;
    row.appendChild(authorCell);
    
    const pagesCell = document.createElement("td");
    pagesCell.textContent = book.pages;
    row.appendChild(pagesCell);

    const readCell = document.createElement("td");
    readCell.textContent = book.info();
    row.appendChild(readCell);

    tbody.appendChild(row);
});

container.appendChild(table)

const showButton = document.getElementById("showDialog");
const addBookDialog = document.getElementById("add-book-dialog");
const outputBox = document.querySelector("output");
const confirmBtn = addBookDialog.querySelector("#confirmBtn");

showButton.addEventListener("click", () => {
    addBookDialog.showModal();
});








