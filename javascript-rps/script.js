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
      return [playerScore, computerScore]
      }
    //  output result
    function game() {
      let result = [0,0]
      // make the game run 5 rounds
      for (let index = 0; result[0] < 5 && result[1] < 5; index++) {
        // store the computer choice into a variable by calling the function
        let computerChoice = getComputerChoice();
        //  ask a player to choose his weapon case insensitive and store it
        let playerChoice = (prompt("What is your choice? (rock, scissors or paper)")).toLowerCase()
        // declare computer score and player score as 0
        let roundResult = playRound(computerChoice, playerChoice)
        result[0] += roundResult[0]
        result[1] += roundResult[1]
        console.log(result)
      }
      if (result[0] > result[1]) {
        console.log("You Won the Game")
      } else {
        console.log("You Lose the Game")
      }
    }
