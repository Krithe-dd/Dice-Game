'use strict';
let classes=(classes)=>document.querySelector(classes),
    multiClasses=(classes)=>document.querySelectorAll(classes),
    id=(id)=>document.getElementById(id);
    // currentScore = document.getElementById(`current--${activePlayer}`);

let btnRoll = classes(".btn--roll"),
    dicePic = classes(".dice"),
    current0= id("#current--0"),
    current1 = id("current--1"),
    scoreValue0 = id("#score--0"),
    scoreValue1 = id("#score--1"),
    players = multiClasses(".player"),
    holdBtn = classes(".btn--hold"),
    currentScore = multiClasses(".current-score");

let active= true,
    activePlayer=0,
    scoreTotal = document.getElementById(`score--${activePlayer}`),
    current=0, 
    scores = [0,0];

btnRoll.addEventListener("click", ()=>{    
    let randomNumber = Math.floor(Math.random()*6)+1;
    
    if(randomNumber==1){
        switchPlayer();
        document.getElementById(`score--${activePlayer}`).textContent=0;
        activePlayer = activePlayer==1 ? 0 : 1;
        dicePic.setAttribute("src", "dice-1.png");
        active=false;
    }
    if(active){
        dicePic.setAttribute("src", "dice-"+randomNumber+".png");
        current+=randomNumber;
        document.getElementById(`current--${activePlayer}`).textContent= current;
        }
        active=true;
})

let switchPlayer=()=>{
    
    for(let i=0; i<players.length; i++)  players[i].classList.toggle("player--active");

    scores[activePlayer]+=current;
    document.getElementById(`score--${activePlayer}`).textContent= scores[activePlayer];
    currentScore[activePlayer].textContent="0";

    current=0;  

    
    }

holdBtn.addEventListener("click", ()=>{
    switchPlayer();
    activePlayer = activePlayer==1 ? 0 : 1;
})
