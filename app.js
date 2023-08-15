document.addEventListener("DOMContentLoaded", function () {

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


    function updateLibraryDisplay() {
        container.innerHTML = ""; // Clear the current display

        myLibrary.forEach((book) => {
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
    }

    const myLibrary = [];

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
    const addBookDialog = document.getElementById("addBookDialog");
    const confirmButton = addBookDialog.querySelector("#confirmBtn");

    showButton.addEventListener("click", (event) => {
        addBookDialog.showModal();
    });

    confirmButton.addEventListener("click", (event) => {
        event.preventDefault();

        const titleInput = document.querySelector(".title-input");
        const authorInput = document.querySelector(".author-input");
        const pagesInput = document.querySelector(".pages-input");
        const readInput = document.querySelector(".read-input");

        const readValue = readInput.value.toLowerCase() === "yes" ? true : false;
    
        addBookToLibrary(
            titleInput.value,
            authorInput.value,
            pagesInput.value,
            readValue
        );

        updateLibraryDisplay();
        addBookDialog.close();
    });

});