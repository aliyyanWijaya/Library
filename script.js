const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID();
}

Book.prototype.toggleRead = () => {
  if(this.valueOf == yes) {
    return "no";
  } else {
    return "yes";
  }
}

function addBookToLibrary(title, author, pages, read) {
  // take params, create a book then store it in the array
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);

    let cardContainer = document.querySelector(".container");

    const bookContainer = document.createElement("div");
    bookContainer.classList.add("book-container");
    bookContainer.id = newBook.id;

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
    const bookTitle = "Title: " + newBook.title;
    const bookAuthor = "Author: " + newBook.author;
    const bookPages = "Number of pages: " + newBook.pages;
    let bookRead = "Finish read : " + newBook.read;
    
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
    newButton.textContent = "Delete";
    newButton.classList.add("delete-button");
    

    //Edit read button
    const readButton = document.createElement("button");
    readButton.textContent = "Edit Read Status"
    readButton.classList.add("edit-button");
    bookContainer.append(readButton);
    bookContainer.append(newButton);

    cardContainer.append(bookContainer);

      readButton.addEventListener("click", () => {
      const idContainer = bookContainer.id;
      const objectIndex = myLibrary.findIndex(book => book.id === idContainer);
      
      if (objectIndex !== -1) {
        // Toggle the value in the array
        myLibrary[objectIndex].read = myLibrary[objectIndex].read === "yes" ? "no" : "yes";
        
        // Update the DOM
        const editText = bookContainer.querySelector(".read-container");
        editText.textContent = "Finish read: " + myLibrary[objectIndex].read;
      }
    });

  }
    

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, "not yet");
addBookToLibrary("1984", "George Orwell", 328, "done");
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, "in progress");
addBookToLibrary("Pride and Prejudice", "Jane Austen", 279, "done");
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180, "not yet");
addBookToLibrary("Moby-Dick", "Herman Melville", 635, "in progress");
addBookToLibrary("The Catcher in the Rye", "J.D. Salinger", 214, "done");
addBookToLibrary("Brave New World", "Aldous Huxley", 311, "not yet");
addBookToLibrary("Sapiens: A Brief History of Humankind", "Yuval Noah Harari", 443, "done");

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
    const idBook = card.parentNode.id;
    const indexToRemove = myLibrary.findIndex (item => item.id === idBook);

    if (indexToRemove !== -1) {
      myLibrary.splice(indexToRemove, 1);
    }

    
  })
})



