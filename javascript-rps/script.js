// make a function called computer choice
function getComputerChoice() {
  // Create an array that have 3 elements: rock, scissors and paper
  const weapon = ['rock', 'scissors', 'paper'];
  //return a random element from the array
  return weapon[Math.floor(Math.random() * weapon.length)]
}
  //  create a function name that take playerSelection and computerSelection as parameter
function playRound(computerSelection, playerSelection) {
  // declare playerscore and computerscore to store the gamestate
  let result
  //  compare if playerselection beats computer selection and update the score
  switch (computerSelection) {
    case 'rock':
      if (playerSelection === 'scissors') {
        return -1;
      }
      if (playerSelection === 'paper') {
        return 1;
      }
      break;
    case 'scissors':
      if (playerSelection === 'rock') {
        return 1;
      }
      if (playerSelection === 'paper') {
        return -1;
      }
      break;
    case 'paper':
      if (playerSelection === 'scissors') {
        return 1;
      }
      if (playerSelection === 'rock') {
        return -1;
      }
      break
    }
  //  return the winner
  return 0;
  }

function startMatch() {
  let game = document.querySelector(".container-game")
  let home = document.querySelector(".container-home")
  let rounds = document.querySelector("rounds")
  home.classList.toggle("show-off-content")
  game.classList.toggle("show-off-content")
}

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

//
let startGame = document.querySelector(".start-game");
startGame.addEventListener('click', function(){
  startMatch()});

let weapon = document.querySelectorAll(".weapon-card")
weapon.forEach(element => {
  element.addEventListener('click', function (event){
    let weapon = event.currentTarget.querySelector('h3').textContent.toLowerCase()
    let player = document.querySelector("#ia-score")
    let ia = document.querySelector("#player-score")
    const result = playRound(getComputerChoice(), weapon)
    if (result === 1) {
      player.textContent = parseInt(player.textContent) + 1;
    } else if(result === -1) {
      ia.textContent = parseInt(ia.textContent) + 1;
    } else {
    }
    let playerScore = parseInt(document.querySelector("#player-score").textContent)
    let iaScore = parseInt(document.querySelector("#ia-score").textContent)
    if (playerScore === 5) {
      alert("You Won")
      player.textContent = 0
      ia.textContent = 0
    }
    if (iaScore === 5) {
      alert("You Lose")
      player.textContent = 0
      ia.textContent = 0
    }
  })
})


