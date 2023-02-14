'use strict';

const scroe0EL = document.querySelector('#score--0');
const scroe1EL = document.querySelector('#score--1');
const curr0El = document.getElementById('current--0');
const curr1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player1EL = document.querySelector('.player--1');
const player0EL = document.querySelector('.player--0');



let scores, currScore, activePlayer, playing;


const init = function(){

   scores = [0,0]
   currScore = 0
   activePlayer = 0
   playing = true

  scroe0EL.textContent = 0;
  scroe1EL.textContent = 0;
  diceEl.classList.add('hidden');


  scroe0EL.textContent = 0;
  scroe1EL.textContent = 0;

  curr0El.textContent = 0;
  curr1El.textContent = 0;

  player0EL.classList.remove('player--winner')
  player1EL.classList.remove('player--winner')
  player0EL.classList.add('player--active')
  player1EL.classList.remove('player--active')
}
init()
const switchPlayer = function(){
  document.getElementById(`current--${activePlayer}`).textContent= 0
  currScore = 0
  activePlayer = activePlayer === 0 ? 1 : 0
  player0EL.classList.toggle('player--active')
  player1EL.classList.toggle('player--active')

}


btnRoll.addEventListener('click', function(){

  if(playing){
  const dice = Math.floor(Math.random()*6)+1;
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`
  if (dice !==1){
    currScore+= dice
    document.getElementById(`current--${activePlayer}`)
      .textContent=currScore
  }else{
    switchPlayer()
  }


}})

btnHold.addEventListener('click', function(){
  if (playing){
  scores[activePlayer] += currScore
  document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
  if(scores[activePlayer] >= 100){

    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
    playing = false

  }
  switchPlayer()
}})

btnNew.addEventListener('click', init)

