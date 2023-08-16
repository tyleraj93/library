// Constructor function for creating Book objects
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    // Method that returns book information
    this.info = () => {
        return read
            ? `${this.title} by ${this.author}, ${this.pages} pages, read already`
            : `${this.title} by ${this.author}, ${this.pages} pages, not read yet`;
    };

    // Method for toggling the read status of the book
    this.toggleReadStatus = () => {
        this.read = !this.read;
    };
}

// Function to add a new Book to the library
function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));
}

// Function to clear input fields
function clearInputs() {
    [titleInput.value, authorInput.value, pagesInput.value, readInput.value] = [
        "",
        "",
        "",
        "",
    ];
}

// Function to build the library display
function buildLibrary() {
    container.innerHTML = ""; // Clear the current display for updating the library

    myLibrary.forEach((book, index) => {
        const card = document.createElement("div");
        card.classList.add("card");

        // Create and populate elements for title, author, pages, and read status
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

        // Create read status button and handle click event
        const readSpot = document.createElement("button");
        const readText = document.createElement("p");
        readText.textContent = book.read ? "Read" : "Not Read";
        readSpot.appendChild(readText);
        readSpot.classList.add("content", "read-status", "book-button");
        readSpot.addEventListener("click", () => {
            book.toggleReadStatus();
            buildLibrary();
        });
        card.appendChild(readSpot);

        // Create remove button and handle click event
        const removeButton = document.createElement("button");
        const removeText = document.createElement("p");
        removeText.textContent = "Remove";
        removeButton.appendChild(removeText);
        removeButton.classList.add("book-button");
        removeButton.addEventListener("click", () => {
            myLibrary.splice(index, 1);
            buildLibrary();
        });
        card.appendChild(removeButton);

        // Add the card to the container
        container.appendChild(card);
    });
}

// Initialize an empty library
const myLibrary = [];

// Add some initial books to the library
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
addBookToLibrary("Awaken the Giant Within", "Anthony Robbins", 538, true);
addBookToLibrary("Dune", "Frank Herbert", 884, true);

// Get reference to the container element
const container = document.querySelector(".grid-container");

// Get references to UI elements
const showButton = document.getElementById("showDialog");
const addBookDialog = document.getElementById("addBookDialog");
const confirmButton = addBookDialog.querySelector("#confirmBtn");
const cancelButton = addBookDialog.querySelector("#cancelBtn");
const titleInput = document.querySelector(".title-input");
const authorInput = document.querySelector(".author-input");
const pagesInput = document.querySelector(".pages-input");
const readInput = document.querySelector(".read-input");

// Event listeners for showing, canceling, and confirming book addition
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

// Initial build of the library display
buildLibrary();
