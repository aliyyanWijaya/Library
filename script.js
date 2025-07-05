const myLibrary = [];



function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, read) {
  // take params, create a book then store it in the array
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);

    let cardContainer = document.querySelector(".container");

    const bookContainer = document.createElement("div");
    bookContainer.classList.add("book-container");

    //add the text title, author, pages, and read to the div
    const newDiv1 = document.createElement("div");
    newDiv1.classList.add("title-container");
    const newDiv2 = document.createElement("div");
    newDiv2.classList.add("author-container");
    const newDiv3 = document.createElement("div");
    newDiv3.classList.add("pages-container");
    const newDiv4 = document.createElement("div");
    newDiv4.classList.add("read-container");
    //;
    const bookTitle = newBook.title;
    const bookAuthor = newBook.author;
    const bookPages = newBook.pages;
    const bookRead = newBook.read;
    
    newDiv1.append(bookTitle);
    newDiv2.append(bookAuthor);
    newDiv3.append(bookPages);
    newDiv4.append(bookRead);
    
    bookContainer.append(newDiv1);
    bookContainer.append(newDiv2);
    bookContainer.append(newDiv3);
    bookContainer.append(newDiv4);

    //create delete button
    const newButton = document.createElement("button");
    newButton.textContent = "Delete"
    newButton.classList.add("delete-button");
    bookContainer.append(newButton);

    cardContainer.append(bookContainer);
    
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");
addBookToLibrary("Laskar Pelangi", "Andrea Hirata", 295, "not read yet");

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog .close-button");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});


const submitButton = document.querySelector(".submit");
submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  const bookTitle = document.querySelector("#book-title").value;
  const bookAuthor = document.querySelector("#book-author").value;
  const bookPages = document.querySelector("#book-pages").value;
  const bookRead = document.querySelector('input[name="read"]:checked').value;
  
  addBookToLibrary(bookTitle, bookAuthor, bookPages, bookRead);

  dialog.close();
})

const deleteButton = document.querySelectorAll(".delete-button");
deleteButton.forEach((card) => {
  card.addEventListener("click", () => {
    console.log(card.parentNode)
    card.parentNode.remove();
    console.log(myLibrary)
  })
})

