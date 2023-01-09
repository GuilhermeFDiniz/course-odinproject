// Screen Mode
const dark = document.querySelector(".fa-moon");
dark.addEventListener("click", function () {
  darkMode();
});

const light = document.querySelector(".fa-sun");
light.addEventListener("click", function () {
  lightMode();
});

function darkMode() {
  document.body.style.backgroundColor = "rgb(50, 50, 50)";
  document.body.style.color = "white";
  const screen = document.querySelectorAll(".screen-mode");
  screen.forEach((element) => {
    element.classList.toggle("show-off-content");
  });
}

function lightMode() {
  document.body.style.backgroundColor = "rgb(255, 225, 175)";
  document.body.style.color = "black";
  const screen = document.querySelectorAll(".screen-mode");
  screen.forEach((element) => {
    element.classList.toggle("show-off-content");
  });
}

//
const addBookModal = document.getElementById("addBookModal");
const addBookForm = document.getElementById("addBookForm");
const overlay = document.getElementById("overlay");
const addBookBtn = document.getElementById("addBookBtn");
const bookContainer = document.querySelector(".container-books");
const form = document.querySelector("form");
const myLibrary = [];
let bookId = 0;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  addBook();
});

function getFromForm() {
  const author = document.getElementById("author").value;
  const title = document.getElementById("title").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;
  document.getElementById("author").blur();
  return new Book(author, title, pages, read, bookId);
}

function addBook() {
  const book = getFromForm();
  addBookToLibrary(book);
  createBookCard(book);
  bookId++;
  closeAddBookModal();
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function createBookCard(book) {
  const bookCard = document.createElement("div");
  const bookContent = document.createElement("div");
  const bookTitle = document.createElement("p");
  const bookAuthor = document.createElement("p");
  const bookPages = document.createElement("p");
  const bookIsRead = document.createElement("p");
  const buttonGroup = document.createElement("div");
  const buttonRemove = document.createElement("button");
  const buttonEdit = document.createElement("button");
  buttonEdit.textContent = "Edit";
  buttonRemove.textContent = "Remove";
  buttonRemove.classList.add("btn-book");
  buttonEdit.classList.add("btn-book");
  bookCard.classList.add("book");
  bookContent.classList.add("book-content");
  buttonEdit.classList.add("edit");
  buttonRemove.classList.add("remove");
  buttonGroup.classList.add("button-group");
  bookContent.appendChild(bookTitle);
  bookContent.appendChild(bookAuthor);
  bookContent.appendChild(bookPages);
  bookContent.appendChild(bookIsRead);
  buttonGroup.appendChild(buttonRemove);
  buttonGroup.appendChild(buttonEdit);
  bookCard.appendChild(bookContent);
  bookCard.appendChild(buttonGroup);
  buttonRemove.setAttribute("book-id", book.id);
  buttonEdit.setAttribute("book-id", book.id);
  bookCard.setAttribute("book-id", book.id);
  bookTitle.textContent = `Title: ${book.title}`;
  bookAuthor.textContent = `Author: ${book.author}`;
  bookPages.textContent = `Pages: ${book.pages}`;
  bookIsRead.textContent = `Read: ${book.read}`;
  buttonRemove.addEventListener("click", (event) => {
    myLibrary.forEach((e, index) => {
      if (e.id === parseInt(event.currentTarget.getAttribute("book-id"))) {
        myLibrary.splice(index, 1);
        event.path[2].remove();
      }
    });
  });
  bookContainer.appendChild(bookCard);
}

function Book(author, title, pages, read = "false", id) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = id;
}

function openAddBookModal() {
  addBookForm.reset();
  addBookModal.classList.add("active");
  overlay.classList.add("active");
  document.getElementById("author").focus();
}

function closeAddBookModal() {
  addBookModal.classList.remove("active");
  overlay.classList.remove("active");
}

addBookBtn.addEventListener("click", () => openAddBookModal());
overlay.addEventListener("click", () => closeAddBookModal());
