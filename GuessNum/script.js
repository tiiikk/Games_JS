'use strict';

let my_guess =  Math.floor((Math.random() * 20)+1)
let score = 20
let high_score = 0

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}
document.querySelector('.check').addEventListener('click',function (){
    const guess = Number(document.querySelector('.guess').value)
    if (!guess){
        displayMessage ('Please check a number bigger than 0 ‍😑🤦‍♂️')
    }
    else if(guess === my_guess){
        document.querySelector('.number').textContent = my_guess;
        displayMessage ('You won! 🤬');
        document.querySelector('body').style.backgroundColor = '#37c60e';
        if(high_score < score){
            high_score = score
            document.querySelector('.highscore').textContent = score

        }}else if (guess !== my_guess) {
        if (score > 1) {

            score--;
            document.querySelector('.score').textContent = score;
            if (guess > my_guess) {
                displayMessage('My guess is smaller 👺');
            } else {
                displayMessage('My guess is bigger 🤭');

            }
        }else{
            displayMessage('You lost the game 🤣🤣');
            document.querySelector('.score').textContent = 0;

        }
    }

});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    my_guess = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});