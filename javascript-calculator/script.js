// Screen Mode

let dark = document.querySelector(".fa-moon")
dark.addEventListener('click', function (){
  darkMode()})

let light = document.querySelector(".fa-sun")
light.addEventListener('click', function (){
  lightMode()})

function darkMode(){
  document.body.style.backgroundColor = 'rgb(50, 50, 50)';
  document.body.style.color = 'white';
  let screen = document.querySelectorAll(".screen-mode")
  screen.forEach(element => {
   element.classList.toggle("show-off-content")
});
}

function lightMode() {
  document.body.style.backgroundColor = 'rgb(255, 225, 175)';
  document.body.style.color = 'black';
  let screen = document.querySelectorAll(".screen-mode")
  screen.forEach(element => {
   element.classList.toggle("show-off-content")
});
}

// Calculator Features
const calcButtons = document.querySelectorAll(".calc-item")

for (let i = 0; i < calcButtons.length; i++) {
  calcButtons.addEventListener('click', () => {
    
  })
}
