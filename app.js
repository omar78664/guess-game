let min = 1,
    max = 10,
    winningNum = randomNum(min, max),
    guessesLeft = 3;

const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessInput = document.querySelector('#guess-input'),
      guessBtn = document.querySelector('#guess-btn'),
      message = document.querySelector('.message');


minNum.textContent = min;
maxNum.textContent = max;
game.addEventListener('mousedown', function(e){
  if(e.target.className === 'play-again'){
    window.location.reload();
  }
});

guessBtn.addEventListener('click', function(){
  guess = parseInt(guessInput.value);

  if(isNaN(guess) || guess > max || guess < min){
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  if(guess === winningNum){
    gameOver(true,`${winningNum} is correct, YOU WIN!`)
  } else {
    guessesLeft -= 1;

    if(guessesLeft === 0){
      gameOver(false,`Game Over, You Lost. The correct number was ${winningNum}`);
    } else {
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
      guessInput.value = '';
      guessInput.style.borderColor = 'red';
    }
  }
});


function setMessage(msg, color){
  message.textContent = msg;
  message.style.color = color; 
}

function gameOver(won, msg){
  let color; 
  won === true ? color = 'green' : color = 'red'; 
  guessInput.disabled = true;
  guessInput.style.borderColor = color;
  message.style.color = color;
  setMessage(msg);

  guessBtn.value = 'Plag Again';
  guessBtn.className = 'play-again';
}

function randomNum(min, max){
  return (Math.floor(Math.random()*(max-min+1)+min));
}