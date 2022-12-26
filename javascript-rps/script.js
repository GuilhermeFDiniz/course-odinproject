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
  let playerScore = 0
  let computerScore = 0
  //  compare if playerselection beats computer selection and update the score
  switch (computerSelection) {
    case 'rock':
      if (playerSelection === 'scissors') {
        computerScore ++;
      }
      if (playerSelection === 'paper') {
        playerScore ++;
      }
      break;
    case 'scissors':
      if (playerSelection === 'rock') {
        playerScore ++;
      }
      if (playerSelection === 'paper') {
        computerScore ++;
      }
      break;
    case 'paper':
      if (playerSelection === 'scissors') {
        playerScore ++;
      }
      if (playerSelection === 'rock') {
        computerScore ++;
      }
      break
    }
  //  return the winner
  console.log(playerScore)
  return [playerScore, computerScore]
  }

function startMatch() {
  console.log("oi")
}

let startGame = document.querySelector(".start-game");
startGame.addEventListener('click', function(){
  startMatch()});

let rock = document.querySelector(".card-rock")
rock.addEventListener('click', function (){
  playRound(getComputerChoice(), 'rock')})
console.log(rock)
let scissors = document.querySelector(".card-scissors")
scissors.addEventListener('click', function(){
  playRound(getComputerChoice(), 'scissors')})
console.log(scissors)
let paper = document.querySelector(".card-paper")
paper.addEventListener('click', function(){
  playRound(getComputerChoice(), 'paper')})
console.log(paper)
