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
    if (calculation.innerText.length > 20) {
      alert("Character Limit Achieved")
    } else {
      calculation.innerText += element.innerText
    }

  })
});


equal.addEventListener('click', () => {
  let operation = calculation.textContent.match(/([\*||\/||\+||\-||])/)[0]
  console.log(operation)
  let numbers = calculation.textContent.split(operation)
  let firstNumber = parseFloat(numbers[0])
  let secondNumber = parseFloat(numbers[1])
  switch (operation) {
    case '+':
      result.innerText = firstNumber + secondNumber
      break;
    case '-':
      result.innerText = firstNumber - secondNumber
      break;
    case '*':
      result.innerText = firstNumber * secondNumber
      break;
    case '/':
      result.innerText = firstNumber / secondNumber
      break;
  }
  calculation.innerText = result.innerText
})

operators.forEach(element => {
  element.addEventListener("click", (e) => {
    let operation = e.target.innerText
    calculation.innerText += operation
  })
})

clear.addEventListener('click', () => {
  result.textContent = ""
  calculation.textContent = ""
})

backspace.addEventListener('click', () => {
  calculation.innerText = calculation.innerText.slice(0 , -1)
})

decimal.addEventListener("click", () => {
  if (checkDecimal(calculation.textContent) === 1){
    calculation.textContent += "."
  }
})

function checkDecimal(string) {
  if ( string.search(/([\*||\/||\+||\-||])/) >= 0){
  let lastNumber = string.split(string.match(/([\*||\/||\+||\-||])/)[0])[1]
    return lastNumber.search(/(\.)/) >= 0 ? -1 : 1
  } else if (string.search(/(\.)/) >= 0){
    return -1
  } else {
    return 1
  }
}
