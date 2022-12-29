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
  const total = executeCalculation(calculation.innerText)
  calculation.innerText = total
  result.innerText = total
})

operators.forEach(element => {
  element.addEventListener("click", (e) => {
    let lastChar = calculation.innerText[calculation.innerText.length-1]
    if (checkOperator(calculation.innerText) === -1) {
    let operation = e.target.innerText
    calculation.innerText += operation
  } else if (lastChar.search(/([\*||\/||\+||\-||])/) === 0 ) {
    const total = executeCalculation(`${calculation.innerText}${result.innerText}`)
    calculation.innerText = total + e.target.innerText
    result.innerText = total
  } else {
    const total = executeCalculation(calculation.innerText)
    calculation.innerText = total + e.target.innerText
    result.innerText = total
  }
  })
})

clear.addEventListener('click', () => {
  result.innerText = ""
  calculation.innerText = ""
})

backspace.addEventListener('click', () => {
  calculation.innerText = calculation.innerText.slice(0 , -1)
})

decimal.addEventListener("click", () => {
  if (checkDecimal(calculation.innerText) === -1){
    calculation.innerText += "."
  }
})


function checkDecimal(string) {
  if ( string.search(/([\*||\/||\+||\-||])/) >= 0){
  let lastNumber = string.split(string.match(/([\*||\/||\+||\-||])/)[0])[1]
    return lastNumber.search(/(\.)/) >= 0 ? 1 : -1
  } else if (string.search(/(\.)/) >= 0){
    return 1
  } else {
    return -1
  }
}

function checkOperator(string) {
  return string.search(/([\*||\/||\+||\-||])/) >= 0 ? 1 : -1
}

function executeCalculation(string) {
  let operation = string.match(/([\*||\/||\+||\-||])/)[0]
  let numbers = string.split(operation)
  let firstNumber = parseFloat(numbers[0])
  let secondNumber = parseFloat(numbers[1])
  let result = 0
  switch (operation) {
    case '+':
      result = firstNumber + secondNumber
      break;
    case '-':
      result = firstNumber - secondNumber
      break;
    case '*':
      result = firstNumber * secondNumber
      break;
    case '/':
      result = firstNumber / secondNumber
      break;
  }
  return result
}
