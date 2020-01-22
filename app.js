/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/
var scores, roundscore, activeplayer, dice;

scores = [0,0];
roundscore = 0;
activeplayer = 0;

document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';

document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';


document.querySelector('.dice').style.display= 'none';
document.querySelector('.btn-roll').addEventListener('click',function()
{
    //Do something there
    //1 Random number
   var dice= Math.floor(Math.random()*6)+1;
    //2. Display the result
    //document.querySelector('.dice').style.display= 'block';

    var diceDoM=document.querySelector('.dice');
        diceDoM.style.display='block';
        diceDoM.src = 'dice-'+ dice +'.png';

    //3 update the second score IF the Rolled

    if(dice!=1)
    {
        //Add score
        roundscore+=dice;
        document.querySelector('#current-'+activeplayer).textContent=roundscore;
    }
    else{
        //Next players
      activeplayer === 0 ? activeplayer =1:activeplayer=0;
      
      roundscore = 0;
      document.getElementById('current-0').textContent='0';
      document.getElementById('current-1').textContent='0';

    activeplayer ===0? activeplayer = 1:activeplayer= 0;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    
    document.querySelector('.dice').style.display='none';   
    }

});