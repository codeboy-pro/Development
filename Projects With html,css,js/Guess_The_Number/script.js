let random=parseInt(Math.random()*100+1);


const submit=document.querySelector('#subt');

const userinput=document.querySelector('#guessField');


const guessslot=document.querySelector('.guesses');
const remaining= document.querySelector('.lastResult');

const lowOrHi=document.querySelector('.lowOrHi');

const p=document.createElement('p');
const startover=document.querySelector('.resultParas');

let prevGuess=[]
let numGuess=1;
let playGame =true;
if(playGame){
    submit.addEventListener('click',function(e){
e.preventDefault();
const guess=parseInt(userinput.value);
console.log(guess);

validateGuess(guess);
    });

}
function validateGuess(guess){
    if(isNaN(guess)){
        alert('please enter a valid number');

    }
    else if(guess<1){
        alert('please enter a number more than 1');
    }
    else if(guess>100){
        alert('please enter a number less than 100');
    }
else{
    prevGuess.push(guess)
    if(numGuess===11){
        displayGuess(guess)
        displayMessage(`Game over . Random number was ${random}`)
        endGame()
    }else{
        displayGuess(guess);
        checkGuess(guess);

    }
}
}
function checkGuess(guess){
    if(guess=== random){
        displayMessage('You guessed it right');
        endGame();
    }
    else if(guess< random){
        displayMessage('Number is Tooo low');
        
    }
    else if(guess> random){
        displayMessage('Number is Tooo high');

    }

}
function displayGuess(guess){
    userinput.value=''
    guessslot.innerHTML+=`${guess}   `;
    numGuess++;
    remaining.innerHTML=`${11-numGuess}`;
}
function displayMessage(message){
    lowOrHi.innerHTML=`<h2>${message}</h2>`;

}
function endGame(){
userinput.value='';
userinput.setAttribute('disabled','')
p.classList.add('button')
p.innerHTML='<h2 id="newGame">Start a new Game</h2>'
startover.appendChild(p)
let playGame =false;

newGame();
}
function newGame(){
    const newGameButton=document.querySelector('#newGame')
newGameButton.addEventListener('click',function(e){
    random=parseInt(Math.random()*100+1);
    prevGuess=[];
   numGuess=0;

guessslot.innerHTML='';
remaining.innerHTML=`${12-numGuess}`

    userinput.removeAttribute('disabled');
    startover.removeChild(p);

    
    playGame=true;
})
}
