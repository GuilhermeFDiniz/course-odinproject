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

"use strict";

const player = (mark) => {
  this.mark = mark

  const getMark = () => {
    return mark
  }
  return {getMark}
}


const gameBoard = (() => {
  const board = ["", "", "", "", "", "", "", "", ""];

  const setField = (index, sign) => {
    if (index > board.length) return;
    board[index] = sign;
  };

  const getField = (index) => {
    if (index > board.length) return;
    return board[index];
  };

  const reset = () => {
    for (let i = 0; i < board.length; i++) {
      board[i] = "";
    }
  };
    return {setField, getField, reset}
})();

const displayController = (() => {
  const allFields = document.querySelectorAll('.field')
  const restartButton = document.querySelector(".restart-game");
  const messageElement = document.getElementById("message");
  const startButton = document.querySelector('.start-game')
  const welcomeMessage = document.getElementById('welcome-message')


  allFields.forEach((element) => {
    element.addEventListener('click', (event) => {
      if (gameController.getIsOver() || event.target.textContent !== "") return;
      gameController.playRound(parseInt(event.target.dataset.index));
      updateGame();
    })
  })

  startButton.addEventListener('click', () => {
    welcomeMessage.classList.add('show-off-content')
    restartButton.classList.remove('show-off-content')
    startButton.classList.add('show-off-content')
    setMessageElement("Player X's turn");
  })

  restartButton.addEventListener('click', () => {
    gameBoard.reset()
    updateGame()
    gameController.reset()
    setMessageElement("Player X's turn");
  })

  const setResultMessage = (winner) => {
    if (winner === "Draw") {
      setMessageElement("It's a draw!");
    } else {
      setMessageElement(`Player ${winner} has won!`);
    }
  };

  const setMessageElement = (message) => {
    messageElement.textContent = message;
  };

  const updateGame = () => {
    allFields.forEach((element, index) => {
      element.textContent = gameBoard.getField(index)
    })
  }

  return { setResultMessage, setMessageElement };
})();

const gameController = (() => {
  const playerX = player('X');
  const playerO = player('O');
  let round = 1;
  let isOver = false;

  const playRound = (fieldIndex) => {
    gameBoard.setField(fieldIndex, getCurrentPlayerSign());
    if (checkWinner(fieldIndex)) {
      displayController.setResultMessage(getCurrentPlayerSign());
      isOver = true;
      return;
    }
    if (round === 9) {
      displayController.setResultMessage("Draw");
      isOver = true;
      return;
    }
    round++;
    displayController.setMessageElement(
      `Player ${getCurrentPlayerSign()}'s turn`
    );
  };

  const getCurrentPlayerSign = () => {
    return (round % 2 === 0) ? playerO.getMark() : playerX.getMark()
  }

  const checkWinner = (fieldIndex) => {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    return winConditions
    .filter((combination) => combination.includes(fieldIndex))
    .some((possibleCombination) =>
      possibleCombination.every(
        (index) => gameBoard.getField(index) === getCurrentPlayerSign()
      )
    );
  }

  const reset = () => {
    round = 1;
    isOver = false;
  };

  const getIsOver = () => {
    return isOver
  }
  return {playRound, getIsOver, reset};
})();
