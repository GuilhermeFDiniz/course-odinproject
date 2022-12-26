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

function darkMode(){
  document.body.style.backgroundColor = 'black';
  document.body.style.color = 'white';
  let screen = document.querySelectorAll(".screen-mode")
  screen.forEach(element => {
   element.classList.toggle("show-off-content")
});
}

function lightMode() {
  document.body.style.backgroundColor = 'white';
  document.body.style.color = 'black';
  let screen = document.querySelectorAll(".screen-mode")
  screen.forEach(element => {
   element.classList.toggle("show-off-content")
});
}

let startGame = document.querySelector(".start-game");
startGame.addEventListener('click', function(){
  startMatch()});

let weapon = document.querySelectorAll(".weapon-card")
weapon.forEach(element => {
  element.addEventListener('click', function (event){
    let weapon = event.currentTarget.querySelector('h3').textContent.toLowerCase()
    let player = document.querySelector("#player-score")
    let ia = document.querySelector("#ia-score")
    const result = playRound(getComputerChoice(), weapon)
    if (result === 1) {
      player.textContent = parseInt(player.textContent) + 1;
    } else if(result === -1) {
      ia.textContent = parseInt(ia.textContent) + 1;
    } else {

    }
  })
})


let dark = document.querySelector(".fa-moon")
dark.addEventListener('click', function (){
  darkMode()})

let light = document.querySelector(".fa-sun")
light.addEventListener('click', function (){
  lightMode()})
