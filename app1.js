var dice1,dice2;
var player0mainscore,player1mainscore,currentscore,activeplayer;
var dicetotal,dicetotal1;




//document.getElementById

init();


document.querySelector(".btn-roll").addEventListener('click', function() {
dice1= Math.floor(Math.random() * 6)+ 1;

dice2 = Math.floor(Math.random() * 6)+ 1;
console.log("here is dice1 number"+dice1);
console.log("here is dice2 number"+dice2);

var diceDOM1 = document.querySelector('.dice1');
diceDOM1.style.display = 'block';
diceDOM1.src = 'dice-' + dice1 + '.png';

var diceDOM2 = document.querySelector('.dice2');
diceDOM2.style.display = 'block';
diceDOM2.src = 'dice-' + dice2 + '.png';


            if(dice1==1 && dice2==1  )
            {
                console.log("Next Player in turn");
                if(activeplayer==0)
                {
                    player0mainscore += currentscore;
                    document.getElementById('score-'+activeplayer).textContent=player0mainscore;

                    player0mainscore > 500 ? document.querySelector('#winner-0').style.display='block':player0mainscore;
                }
                if(activeplayer==1)
                {
                    player1mainscore += currentscore;
                    document.getElementById('score-'+activeplayer).textContent=player1mainscore;
                    player1mainscore > 500 ? document.querySelector('#winner-1').style.display='block':player1mainscore;
                }
                

                activeplayer ===0? activeplayer = 1:activeplayer= 0;

                console.log("active player "+activeplayer);

                dicetotal1=0;
                currentscore=0;

                document.getElementById('current-0').textContent='0';
                document.getElementById('current-1').textContent='0';

           

            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');
            }
            if(dice1==6 && dice2==6)
            {
                console.log("Next Player in turn");

                if(activeplayer==0)
                {
                    player0mainscore += currentscore;
                    document.getElementById('score-'+activeplayer).textContent=player0mainscore;
                    player0mainscore > 500 ? document.querySelector('#winner-0').style.display='block':player0mainscore;
                }
                if(activeplayer==1)
                {
                    player1mainscore += currentscore;
                    document.getElementById('score-'+activeplayer).textContent=player1mainscore;
                    player1mainscore > 500 ? document.querySelector('#winner-1').style.display='block':player1mainscore;
                }

                activeplayer ===0? activeplayer = 1:activeplayer= 0;
                console.log("active player "+activeplayer);
                //activeplayer == 0 ? activeplayer = 1:activeplayer=0;

                dicetotal1=0;
                currentscore=0;

                document.getElementById('current-0').textContent='0';
                document.getElementById('current-1').textContent='0';

            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');
            }
            else
            {
                
                dicetotal= dice1+dice2;
                    currentscore += dicetotal;
                    console.log("here is totalof  "+currentscore);
                    console.log("activit player "+activeplayer);
                    document.querySelector('#current-'+activeplayer).textContent=currentscore;
            }
 


});

document.querySelector('.btn-new').addEventListener('click', init);


function init() {
    activeplayer= 0
    dicetotal=0;
    dicetotal1=0;
    currentscore=0;
    player0mainscore=0;
    player1mainscore=0;
    
    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    
    document.querySelector('#winner-0').style.display='none';
    document.querySelector('#winner-1').style.display='none';

    //document.querySelector('#global-modal').style.display='block';
}