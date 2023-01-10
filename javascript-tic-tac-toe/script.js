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
  const board = ['','','','','','','','',''];

  const reset = () =>
  board.forEach(element => {
    element = '';
  })

  const setField = (index, mark) => {
    if(board[index] === ''){
    board[index] = mark
    }
  }

  const getField = (index) => {
    return board[index]
  }

  return {setField, getField, reset}
})();

const gameFlow = () => {

}

const board = gameBoard
const pageBoard = document.querySelector('.game-board')
for (let i = 0; i < 9; i++) {
  const field = document.createElement('div')
  field.classList.add('game-field')
  pageBoard.appendChild(field)
}
