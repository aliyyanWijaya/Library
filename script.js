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
    
    cardContainer.append(newDiv1);
    cardContainer.append(newDiv2);
    cardContainer.append(newDiv3);
    cardContainer.append(newDiv4);

}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");