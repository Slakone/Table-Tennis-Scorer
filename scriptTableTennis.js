const buttonP1 = document.querySelector('#buttonP1');
const buttonP2 = document.querySelector('#buttonP2');
const resetB = document.querySelector('#buttonReset');
const resetButtonGame = document.querySelector('#buttonResetGame');

let setDisplayP1 = document.querySelector("#setNum1");
let setDisplayP2 = document.querySelector("#setNum2");
let setsP1 = 0;
let setsP2 = 0;
let setLimit = document.querySelector('#numberOfSets');
let finalSetLimit = parseInt(setLimit.value);


let pointDisplayP1 = document.querySelector('#pointNumP1');
let pointDisplayP2 = document.querySelector('#pointNumP2');
let pointsP1 = 0;
let pointsP2 = 0;
let pointLimit = document.querySelector('#numberOfGames');
let finalPointLimit = parseInt(pointLimit.value);

let isGameOver = false;

let hideAndSeek = document.querySelector('#hideAndSeek');
let h2 = document.querySelector('h2');
let spanElement = document.createElement("span");

let audio = document.querySelector("#yeahSound");




pointLimit.addEventListener('change', function () {
    reset();

})
setLimit.addEventListener('change', function () {
    resetSet();
    reset();
})


resetB.addEventListener("click", function () {
    reset();

})
resetButtonGame.addEventListener("click", function () {
    reset();
    resetSet();

})

buttonP1.addEventListener("click", function () {
    if (!isGameOver) {
        pointsP1++;
        pointDisplayP1.innerText = pointsP1;
        if (pointsP1 === finalPointLimit) {
            if ((pointsP1 - pointsP2) > 1) {
                setsP1++;
                setDisplayP1.innerText = setsP1;
                reset();

            }
            else {
                finalPointLimit++;
            }

        }
        if (setsP1 === finalSetLimit) {
            setDisplayP2.classList.add('loser');
            setDisplayP1.classList.add('winner');
            isGameOver = true;
            spanElement.innerHTML = 'White Player Wins <br>';
            winPhase();


        }

    }

})

buttonP2.addEventListener("click", function () {
    if (!isGameOver) {


        pointsP2++;
        pointDisplayP2.innerText = pointsP2;
        if (pointsP2 === finalPointLimit) {
            if ((pointsP2 - pointsP1) > 1) {
                setsP2++;
                setDisplayP2.innerText = setsP2;
                reset();

            }
            else {
                finalPointLimit++;
            }

        }

        if (setsP2 === finalSetLimit) {
            setDisplayP1.classList.add('loser');
            setDisplayP2.classList.add('winner');
            isGameOver = true;
            spanElement.innerHTML = 'Red Player Wins <br>';
            winPhase();

        }
    }

})
function reset(number) {
    pointsP1 = 0;
    pointsP2 = 0;
    pointDisplayP1.innerText = 0;
    pointDisplayP2.innerText = 0;
    finalPointLimit = parseInt(pointLimit.value);



}
function resetSet() {
    setsP1 = 0;
    setsP2 = 0;
    setDisplayP1.innerText = 0;
    setDisplayP2.innerText = 0;
    finalSetLimit = parseInt(setLimit.value);
    if (isGameOver) {
        audio.pause();
        setDisplayP1.classList.remove('winner', 'loser');
        setDisplayP2.classList.remove('winner', 'loser');
        hideAndSeek.style.display = 'block';
        h2.classList.remove('winWindow'); 
        h2.removeChild(spanElement);
        resetB.classList.remove('hideRButton');
        resetButtonGame.classList.remove('marResetButton');

    }


    isGameOver = false;


}
function winPhase() {
    playYeahSound();
    hideAndSeek.style.display = 'none';
    h2.insertBefore(spanElement, h2.childNodes[0]);
    resetB.classList.add('hideRButton');
    resetButtonGame.classList.add('marResetButton');
    h2.classList.add('winWindow');
}

function playYeahSound() {
    audio.currentTime = 0;
    audio.play();
}