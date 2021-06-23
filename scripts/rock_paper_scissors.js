'use strict';

function computerPlay() {
  let computerMove = Math.floor(Math.random() * 3);
  let computerChoice;
  if(computerMove === 0) {
    computerChoice = 'rock';
  } else if (computerMove === 1) {
    computerChoice = 'paper';
  } else if (computerMove === 2) {
    computerChoice = 'scissors';
  }
  return computerChoice;
}

function userPlay() {
  let userMove = prompt('Your move: ');
  userMove = userMove.trim();
  userMove = userMove.toLowerCase();
  return userMove;
}

function playRound(userMove, computerMove) {
  // returns an object containing the message, the points for the User and 
  // for the computer
  let result = {
    message: '',
    userPoints: 0,
    computerPoints: 0
}
  if(userMove === computerMove) {
    result.message = `It's a tie! Both you and the computer played ${userMove}` 
    result.computerPoints = 0;
    result.userPoints = 0;
  } else if (userMove === 'rock' && computerMove === 'paper') {
    result.message = `You lose! Paper beats rock`;
    result.computerPoints = 1;
    result.userPoints = 0;
  } else if (userMove === 'rock' && computerMove === 'scissors') {
    result.message = `You win! Rock beats scissors`;
    result.computerPoints = 0;
    result.userPoints = 1;
  } else if (userMove === 'paper' && computerMove === 'scissors') {
    result.message = `You lose! Scissors beats paper`;
    result.computerPoints = 1;
    result.userPoints = 0;
  } else if (userMove === 'paper' && computerMove === 'rock') {
    result.message = `You win! Paper beats rock`;
    result.computerPoints = 0;
    result.userPoints = 1;
  } else if (userMove === 'scissors' && computerMove === 'rock') {
    result.message = `You lose! Rock beats scissors`;
    result.computerPoints = 1;
    result.userPoints = 0;
  } else if (userMove === 'scissors' && computerMove === 'paper') {
    result.message = `You win! Scissors beats paper`;
    result.computerPoints = 0;
    result.userPoints = 1;
  } else {
    result.message = `Invalid move!`
    result.computerPoints = 0;  
    result.userPoints = 0;
  }
  return result;
}

function game() {
  let computerPoints = 0;
  let userPoints = 0;
  for(let i = 0; i < 5; i++) {
    let userMove = userPlay();
    let computerMove = computerPlay();
    let result = playRound(userMove, computerMove);
    console.log(result.message);
    computerPoints += result.computerPoints;
    userPoints += result.userPoints;
  }
  if(userPoints > computerPoints) {
    console.log('Congratulations! You won!');
  } else if (userPoints < computerPoints) {
    console.log('You lost! Try again!')
  } else {
    console.log(`It's a tie!`);
  }
  let answer = prompt('Play again? Y/N: ');
  if(answer === 'Y') {
    game();
  }
}
game();