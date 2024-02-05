'use strict';

let secretNumber = Math.round(Math.random() * 20);
const number = document.querySelector(".number");
const checkButton = document.querySelector('.check');
const message = document.querySelector('.message');
const scoreValue = document.querySelector('.score');
const again = document.querySelector(".again");
const body = document.querySelector('body');
const guessInput = document.querySelector(".guess");
const highscore = document.querySelector(".highscore");

let score = 20;
 
checkButton.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    message.textContent = 'No number. Add a number!';
  } else if (guess === secretNumber) {
    message.textContent = 'Correct Number!';
    number.textContent = secretNumber
    body.style.backgroundColor = "#60b347";
    number.style.width = "30rem";
    if (Number(highscore.textContent) < score){
      highscore.textContent = score
    }
  } else {
    if (guess > secretNumber) {
      message.textContent = 'Too high!';
    } else if (guess < secretNumber) {
      message.textContent = 'Too low!';
    }
    score--;
    scoreValue.textContent = score;
    if (score === 0) {
      message.textContent = 'You lost the game!';
    }
  }
});

again.addEventListener("click", function(){
  secretNumber = Math.round(Math.random() * 20);
  score = 20;
  number.textContent = "?";
  message.textContent = "Start guessing...";
  body.style.backgroundColor = "#222";
  scoreValue.textContent = score;
  number.style.width = "15rem";
  guessInput.value = "";
});