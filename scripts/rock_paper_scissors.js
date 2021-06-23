'use strict';

function computerPlay() {
  let computerMove = Math.floor(Math.random() * 3);
  let computerChoice;
  if(computerMove === 0) {
    computerChoice = 'Rock';
  } else if (computerMove === 1) {
    computerChoice = 'Paper';
  } else if (computerMove === 2) {
    computerChoice = 'Scissors';
  }
  return computerChoice;
}

function userPlay() {
  
}

function playRound() {

}

function game() {

}