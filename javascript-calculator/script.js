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
const numbers = document.querySelectorAll(".number")
const calculation = document.querySelector(".calculation")
const result = document.querySelector(".result")
const backspace = document.querySelector(".backspace")
const clear = document.querySelector(".clear")
const equal = document.querySelector(".equal")
const decimal = document.querySelector(".decimal")
const operators = document.querySelectorAll(".operator")

numbers.forEach(element => {
  element.addEventListener('click', () => {
    calculation.innerText += element.innerText
  })
});

operators.forEach(element => {
  element.addEventListener('click', () => {
    if (calculation.textContent.includes("*" || "-" || "+" || "/")) {

    }
  })
});

clear.addEventListener('click', () => {
  result.textContent = ""
  calculation.textContent = ""
})

backspace.addEventListener('click', () => {
  calculation.innerText = calculation.innerText.slice(0 , -1)
})
