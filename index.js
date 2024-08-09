let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let picker1 = document.querySelector(".img1").setAttribute("src", "./images/dice" + randomNumber1 + ".png");
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let picker2 = document.querySelector(".img2").setAttribute("src", "./images/dice" + randomNumber2 + ".png");



function gameResult() {
    if (randomNumber1 > randomNumber2) {
        var audio = new Audio('./sounds/player-1-wins.mp3');
        audio.play();
        document.querySelector('h1').innerHTML = "Player 1 Wins 🚩";
    } else if (randomNumber2 > randomNumber1) {
        document.querySelector('h1').innerHTML = "Player 2 Wins 🚩";
        var audio = new Audio('./sounds/player-2-wins.mp3');
        audio.play();
    } else if (randomNumber1 === randomNumber2) {
        document.querySelector('h1').innerHTML = "Match Tie 😁";
        var audio = new Audio('./sounds/comedy_sms_tonewapspell.mp3');
        audio.play();
    }
}

gameResult();

document.querySelector('button').addEventListener("click", function () {
    window.location.reload();
});