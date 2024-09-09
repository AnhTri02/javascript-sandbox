
let score = (JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
});

function playGame(playerMove) {
const computerMove = pickComputerMove();

let result = '';

if (playerMove === 'scissors') {
  if (computerMove === 'rock') {
    result = 'lose.';
  } else if (computerMove === 'paper') {
    result = 'win.';
  } else if (computerMove === 'scissors') {
    result = 'Tie.';
  }

} else if (playerMove === 'paper') {
  if (computerMove === 'rock') {
    result = 'win.';
  } else if (computerMove === 'paper') {
    result = 'Tie.';
  } else if (computerMove === 'scissors') {
    result = 'lose.';
  }
  
} else if (playerMove === 'rock') {
  if (computerMove === 'rock') {
    result = 'Tie.';
  } else if (computerMove === 'paper') {
    result = 'lose.';
  } else if (computerMove === 'scissors') {
    result = 'win.';
  }
}

if(result === 'win.'){
  score.wins++;
} else if(result === 'lose.'){
  score.losses++;
}else if(result ==='Tie.'){
  score.ties++;
}

localStorage.setItem('score', JSON.stringify(score));


document.querySelector('.js-score').innerHTML = (` Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`)


document.querySelector('.js-you').innerHTML = (`You ${result}`)

document.querySelector('.js-cpu').innerHTML = (`<p>You</p><img src="images/${playerMove}-emoji.png" class="move-icon"> <p>CPU</p><img src="images/${computerMove}-emoji.png" class="move-icon"> `)
}

function pickComputerMove() {
const randomNumber = Math.random();

let computerMove = '';

if (randomNumber >= 0 && randomNumber < 1 / 3) {
  computerMove = 'rock';
} else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
  computerMove = 'paper';
} else if (randomNumber >= 2 / 3 && randomNumber < 1) {
  computerMove = 'scissors';
}

return computerMove;
}