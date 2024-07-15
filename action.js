let randomNumber = parseInt(Math.random()*10+1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const LowOrHigh = document.querySelector('.LowOrHigh');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess=1;
let playGame = true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
}
function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number');
    }else if(guess<1){
        alert('please enter a number greater than 1');
    }
    else if(guess>10){
        alert('please enter a less than or equal to 10');
    }
    else{
        prevGuess.push(guess);
        if(numGuess===3){
            displayGuess(guess);
            displayMessage(`Game Over! Random number was ${randomNumber}`);
            endgame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }


}
function checkGuess(guess){
    if(guess===randomNumber){
        displayMessage('HURRAY!!! You guessed it right');
        endgame();
    } else if(guess<randomNumber){
        displayMessage('Your Number is TOO low');
    } else if(guess>randomNumber){
        displayMessage('Your Number is to High')
    }
}
function displayGuess(guess){
    userInput.value='';
    guessSlot.innerHTML+=`${guess}, `;
    numGuess++;
    remaining.innerHTML=`${4-numGuess}`;

}
function displayMessage(message){
    LowOrHigh.innerHTML = `<h2>${message}</h2>`;
}
function endgame(){
    userInput.value='';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML='<h2 id="newGame"> Start New Game</h2>';
    startOver.appendChild(p);
    playGame=false;
    newgame();

}
function newgame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
      randomNumber = parseInt(Math.random() * 10 + 1);
      prevGuess = [];
      numGuess = 1;
      guessSlot.innerHTML = '';
      remaining.innerHTML = `${4 - numGuess} `;
      userInput.removeAttribute('disabled');
      startOver.removeChild(p);
  
      playGame = true;
    });
  }