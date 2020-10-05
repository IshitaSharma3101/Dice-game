var  scores, roundscore, activeplayer, gameplaying;
init();


document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gameplaying){
    var dice = Math.floor(Math.random() * 6) + 1;
    var dicedom = document.querySelector('#dice');
    dicedom.style.display = 'block';
    dicedom.src = 'dice-' + dice + '.png';

    if(dice!==1){
        roundscore +=dice;
        document.querySelector('#Current-' + activeplayer).textContent = roundscore;
    }else {
        nextplayer();
    }
}
}
    );

    document.querySelector('.btn-hold').addEventListener('click', function(){
        if(gameplaying){
            scores[activeplayer] += roundscore;
            document.getElementById('score-' + activeplayer).textContent = scores[activeplayer];
            if(scores[activeplayer] >= 50)
            {
                document.getElementById('player-' + activeplayer).textContent = 'WINNER!';
                document.querySelector('#dice').style.display = 'none';
                gameplaying = false;
            }else {
                nextplayer();
            }
        }
    })


function nextplayer(){
    activeplayer === 0 ? activeplayer = 1 : activeplayer = 0;
    roundscore = 0;
    document.getElementById('Current-0').textContent = 0;
    document.getElementById('Current-1').textContent = 0;
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.player-2-panel').classList.toggle('active');
    document.querySelector('#dice').style.display = 'none';
    
}


document.querySelector('.btn-new').addEventListener('click', init);

function init(){
    scores = [0,0];
    roundscore = 0;
    activeplayer = 0;
    gameplaying= true;
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('Current-0').textContent = 0;
    document.getElementById('Current-1').textContent = 0;
    document.querySelector('#dice').style.display = 'none';
    document.getElementById('player-0').textContent = 'PLAYER 1';
    document.getElementById('player-1').textContent = 'PLAYER 2';
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-2-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.add('active');
};















