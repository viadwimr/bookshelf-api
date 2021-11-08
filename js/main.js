function makeBook(title, author, year, isCompleted) {
    const textTitle = document.createElement("h3");
    textTitle.innerText = title;

    const textAuthor = document.createElement("p");
    textAuthor.classList.add("authorClass");
    textAuthor.innerText = author;

    const textYear = document.createElement("p");
    textYear.classList.add("yearClass");
    textYear.innerText = year;
    
    const textContainer = document.createElement("div");
    textContainer.classList.add("action");
    
    textContainer.append(textTitle, textAuthor, textYear);

    const container = document.createElement("article");
    container.classList.add("book_item");
    
    container.append(textContainer);
   
    if(isCompleted) {
        container.append(createGreenButton_2(), createRedButton());
    } else {
        container.append(createGreenButton(), createRedButton());
    }

    return container;
}

function createButton(buttonTypeClass, buttonLabel, eventListener) {
    const button = document.createElement("button");
    button.innerText = buttonLabel;
    button.classList.add(buttonTypeClass);

    button.addEventListener("click", function(event) { 
        eventListener(event);
    });
    return button;
}

function createGreenButton() {
    return createButton("green", "Selesai dibaca", function(event) {
        addBookToCompleted(event.target.parentElement.parentElement);
    });
}

function createRedButton() {
    return createButton("red", "Hapus Buku", function(event) {
        removeBookFromCompleted(event.target.parentElement.parentElement);
    });
}

function createGreenButton_2() {
    return createButton("green_2", "Belum selesai dibaca", function(event) {
        undoBookFromCompleted(event.target.parentElement.parentElement.parentElement);
    });
}