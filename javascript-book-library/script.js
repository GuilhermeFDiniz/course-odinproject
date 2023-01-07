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
const author = document.getElementById("author")
const title = document.getElementById("title")
const pages = document.getElementById("pages")
const read = document.getElementById("read")
const addBookModal = document.getElementById('addBookModal')
const addBookForm = document.getElementById('addBookForm')
const overlay = document.getElementById('overlay')
const addBookBtn = document.getElementById('addBookBtn')
const submitBook = document.getElementById('submit-book')

function addBookLibrary(title,author,pages,read) {
  const bookCard = document.querySelector(".container-books")
  const bookHtml= `<div class="book">
  <div class="book-content">
  <p>Title: ${title}</p>
  <p>Author: ${author}</p>
  <p>Pages: ${pages}</p>
  <p>Read: ${read}</p>
  </div>
  <div>
  <button class="btn-book">Remove</button>
  <button class="btn-book">Edit</button>
  </div>`
  bookCard.insertAdjacentHTML('beforeend', bookHtml)
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

function Book(author, title, pages, read){
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

function addBookToLibrary(author, title, pages, read) {
  const book = new Book(author, title, pages, read)
  myLibrary.push(book)
}
