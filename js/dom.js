function addBook() {
    const unCompletedListBook = document.getElementById("incompleteBookshelfList");
    const completedListBook = document.getElementById("completeBookshelfList");
    const bookTitle = document.getElementById("inputBookTitle").value;
    const bookAuthor = document.getElementById("inputBookAuthor").value;
    const bookYear = document.getElementById("inputBookYear").value;
    const isCompleted = document.getElementById("inputBookIsComplete").checked;
    
    const book = makeBook(bookTitle, bookAuthor, bookYear, isCompleted);

    if (isCompleted) {
        completedListBook.append(book);
    } else {
        unCompletedListBook.append(book);
    }

};

function addBookToCompleted(bookElement) {
    const addBookTitle = bookElement.querySelector(".book_item > .action > h3").innerText;
    const addBookAuthor = bookElement.querySelector(".authorClass").innerText;
    const addBookYear = bookElement.querySelector(".yearClass").innerText;

    const book_2 = makeBook(addBookTitle, addBookAuthor, addBookYear, true);
    const completedListBook = document.getElementById("completeBookshelfList");
    completedListBook.append(book_2);
    bookElement.remove();
}

function undoBookFromCompleted(bookElement) {
    const unCompletedListBook = document.getElementById("incompleteBookshelfList");
    
    const addBookTitle = bookElement.querySelector(".book_item > .action > h3").innerText;
    const addBookAuthor = bookElement.querySelector(".authorClass").innerText;
    const addBookYear = bookElement.querySelector(".yearClass").innerText;

    const book_2 = makeBook(addBookTitle, addBookAuthor, addBookYear, false);

    unCompletedListBook.append(book_2);
    bookElement.remove();
}

function removeBookFromCompleted(bookElement) {
    bookElement.remove();
}