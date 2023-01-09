// Screen Mode
const dark = document.querySelector(".fa-moon")
dark.addEventListener('click', function (){
  darkMode()})

const light = document.querySelector(".fa-sun")
light.addEventListener('click', function (){
  lightMode()})

function darkMode(){
  document.body.style.backgroundColor = 'rgb(50, 50, 50)';
  document.body.style.color = 'white';
  const screen = document.querySelectorAll(".screen-mode")
  screen.forEach(element => {
   element.classList.toggle("show-off-content")
});
}

function lightMode() {
  document.body.style.backgroundColor = 'rgb(255, 225, 175)';
  document.body.style.color = 'black';
  const screen = document.querySelectorAll(".screen-mode")
  screen.forEach(element => {
   element.classList.toggle("show-off-content")
});
}

//
const addBookModal = document.getElementById('addBookModal')
const addBookForm = document.getElementById('addBookForm')
const overlay = document.getElementById('overlay')
const addBookBtn = document.getElementById('addBookBtn')
const submitBook = document.getElementById('submit-book')
const author = document.getElementById("author")
const title = document.getElementById("title")
const pages = document.getElementById("pages")
const read = document.getElementById("read")





function addBookLibrary(title,author,pages,read) {
  const bookCard = document.querySelector(".container-books")
  const bookDiv = document.createElement('div')
  const bookContent = document.createElement('div')
  const bookTitle = document.createElement('p')
  const bookAuthor = document.createElement('p')
  const bookPages = document.createElement('p')
  const bookIsRead = document.createElement('p')
  const buttonGroup = document.createElement('div')
  const buttonRemove = document.createElement('button')
  const buttonEdit = document.createElement('button')
  bookDiv.classList.add('book')
  bookContent.classList.add('book-content')
  buttonEdit.textContent = "Edit"
  buttonRemove.textContent = "Remove"
  bookTitle.textContent = `Title: ${title}`
  bookAuthor.textContent = `Author: ${author}`
  bookPages.textContent = `Pages: ${pages}`
  bookIsRead.textContent = `Read: ${read}`
  bookContent.appendChild(bookTitle)
  bookContent.appendChild(bookAuthor)
  bookContent.appendChild(bookPages)
  bookContent.appendChild(bookIsRead)
  buttonGroup.appendChild(buttonRemove)
  buttonGroup.appendChild(buttonEdit)
  bookDiv.appendChild(bookContent)
  bookDiv.appendChild(buttonGroup)
  bookCard.appendChild(bookDiv)
  buttonRemove.classList.add('btn-book')
  buttonEdit.classList.add('btn-book')
}



submitBook.addEventListener('click', (event) => {
  event.preventDefault()
  addBookToLibrary(author.value, title.value, pages.value, read.value)
  addBookLibrary(author.value, title.value, pages.value, read.value)
  addBookModal.classList.remove('active')
  overlay.classList.remove('active')
})



const openAddBookModal = () => {
  addBookForm.reset()
  addBookModal.classList.add('active')
  overlay.classList.add('active')
  author.focus()
}

const closeAddBookModal = () => {
  addBookModal.classList.remove('active')
  overlay.classList.remove('active')
}

const closeAllModals = () => {
  closeAddBookModal()
}

addBookBtn.onclick = openAddBookModal
overlay.onclick = closeAllModals

const myLibrary = []

function Book(author, title, pages, read = 'false'){
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

function addBookToLibrary(author, title, pages, read) {
  const book = new Book(author, title, pages, read)
  myLibrary.push(book)
}
