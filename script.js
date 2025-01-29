'use strict'
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 7;
document.querySelector('.score').textContent = 10;

document.querySelector('guess').value = 23;
console.log(document.querySelector('.guess').value);

*/



let number = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;



document.querySelector('.check').addEventListener('click', function(){
    const guess  = Number(document.querySelector('.guess').value);

    console.log(guess);

    if(!guess){
        document.querySelector('.message').textContent = 'No Number!';
    }

    else if( guess === number) {
        document.querySelector('.message').textContent = 'Correct Number!';
     
        document.querySelector('.number').textContent = number;

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';

        highscore = highscore+score;
        

        document.querySelector('.highscore').textContent = highscore;
    }
    else if( guess > number) {
        if(score >0){
        document.querySelector('.message').textContent = 'Too high!';
        score= score - 1;
        document.querySelector('.score').textContent = score;
        }
        else 
        document.querySelector('.message').textContent = 'You lost the game!';
    }
    else if( guess < number) {
        if(score >0){
        document.querySelector('.message').textContent = 'Too Low!';
        score= score - 1;
        document.querySelector('.score').textContent = score;
        }
        else 
        document.querySelector('.message').textContent = 'You lost the game!';
    }
   

});


document.querySelector('.again').addEventListener('click', function(){
    let score = 20;
    number = Math.trunc(Math.random()*20)+1;

    document.querySelector('.score').textContent = score;

    document.querySelector('.message').textContent = 'Start guessing...';

    const guess  = document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

    document.querySelector('.number').textContent = '?' ;


})
