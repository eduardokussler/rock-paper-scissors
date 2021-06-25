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

function playRound(userMove) {
  // returns an object containing the message, the points for the User and 
  // for the computer
  let result = {
    message: '',
    userPoints: 0,
    computerPoints: 0
}
  let computerMove = computerPlay();
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
let computerPoints = 0;
let userPoints = 0;
const GAMES_TO_WIN = 5;
const gameDiv = document.querySelector('#game');

const rock = document.createElement('button');
rock.textContent = 'rock';
const paper = document.createElement('button');
paper.textContent = 'paper';
const scissors = document.createElement('button');
scissors.textContent = 'scissors';
gameDiv.appendChild(rock);
gameDiv.appendChild(paper);
gameDiv.appendChild(scissors);
const buttons = document.querySelectorAll('button');
const userPointsDiv = document.querySelector('#userPoints');
const computerPointsDiv = document.querySelector('#computerPoints')
userPointsDiv.textContent = `User points: ${userPoints}`;
computerPointsDiv.textContent = `Computer points: ${computerPoints}`;    
let roundResult = document.createElement('div');
roundResult.textContent = 'The result of each round will be displayed here.';
gameDiv.appendChild(roundResult);
buttons.forEach(button => {
  button.addEventListener('click', (event) => {
    let move = button.innerText;
    let result = playRound(move);
    computerPoints += result.computerPoints;
    userPoints += result.userPoints;
    roundResult.textContent = result.message;
    userPointsDiv.textContent = `User points: ${userPoints}`;
    computerPointsDiv.textContent = `Computer points: ${computerPoints}`;  
    if(computerPoints === GAMES_TO_WIN) {
      alert('The computer won! Try again');
    }
    if(userPoints === GAMES_TO_WIN) {
      alert('You won!');
    }
  })
})

const resetDiv = document.querySelector('#reset');
const resetButton = document.createElement('button');
resetButton.textContent = 'reset';
resetButton.addEventListener('click', () => {
  userPoints = 0;
  computerPoints = 0;
  userPointsDiv.textContent = `User points: ${userPoints}`;
    computerPointsDiv.textContent = `Computer points: ${computerPoints}`;  
})
resetDiv.appendChild(resetButton);
