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
    this.toggleReadStatus = () => {
        this.read = !this.read;
    };
}

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));
}


function clearInputs() {
    [titleInput.value, authorInput.value, pagesInput.value, readInput.value] = [
        "",
        "",
        "",
        "",
    ];
}

function buildLibrary() {
    container.innerHTML = ""; // Clear the current display for updating the library

    myLibrary.forEach((book, index) => {
        const card = document.createElement("div");
        card.classList.add("card");

        const titleSpot = document.createElement("h1");
        titleSpot.classList.add("content");
        titleSpot.textContent = book.title;
        card.appendChild(titleSpot);

        const authorSpot = document.createElement("h2");
        authorSpot.classList.add("content");
        authorSpot.textContent = book.author;
        card.appendChild(authorSpot);

        const pagesSpot = document.createElement("p");
        pagesSpot.classList.add("content");
        pagesSpot.textContent = book.pages;
        card.appendChild(pagesSpot);

        const readSpot = document.createElement("button");
        readSpot.classList.add("content");
        const readText = document.createElement("p")
        readText.textContent = book.read ? "Read" : "Not Read";
        readSpot.appendChild(readText);
        readSpot.classList.add("read-status", "book-button");
        readSpot.addEventListener("click", () => {
            book.toggleReadStatus();
            buildLibrary();
        });
        card.appendChild(readSpot);

        const removeButton = document.createElement("button");
        const removeText = document.createElement("p");
        removeText.textContent = "Remove";
        removeButton.appendChild(removeText);
        removeButton.classList.add("book-button");
        removeButton.addEventListener("click", () => {
            myLibrary.splice(index, 1);
            buildLibrary();
        })
        card.appendChild(removeButton);

        container.appendChild(card);
    });
};

const myLibrary = [];
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
addBookToLibrary("Awaken the Giant Within", "Anthony Robbins", 538, true);
addBookToLibrary("Dune", "Frank Herbert", 884, true);

const container = document.querySelector(".grid-container");
const showButton = document.getElementById("showDialog");
const addBookDialog = document.getElementById("addBookDialog");
const confirmButton = addBookDialog.querySelector("#confirmBtn");
const cancelButton = addBookDialog.querySelector("#cancelBtn");

const titleInput = document.querySelector(".title-input");
const authorInput = document.querySelector(".author-input");
const pagesInput = document.querySelector(".pages-input");
const readInput = document.querySelector(".read-input");

showButton.addEventListener("click", () => {
    addBookDialog.showModal();
});

cancelButton.addEventListener("click", () => {
    clearInputs();
    addBookDialog.close();
});

confirmButton.addEventListener("click", (event) => {
    event.preventDefault();

    const readValue = readInput.value.toLowerCase() === "yes" ? true : false;

    addBookToLibrary(
        titleInput.value,
        authorInput.value,
        pagesInput.value,
        readValue
    );
    clearInputs();
    buildLibrary();
    addBookDialog.close();
});

buildLibrary();

//
// Cancel Button
