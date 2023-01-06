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
