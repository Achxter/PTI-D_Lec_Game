let circle = document.querySelector('#charImg');
let square = document.querySelector('#target');
const rect1 = circle.getBoundingClientRect();
const rect2 = square.getBoundingClientRect();
let game = document.querySelector('#game');
let buttonUp = document.querySelector('#buttonUp');
let buttonLeft = document.querySelector('#buttonLeft');
let buttonRight = document.querySelector('#buttonRight');
let buttonDown = document.querySelector('#buttonDown');
let moveBy = 10;
let timer = 30;
let score = 0;
const charImg = localStorage.getItem("charImg");
document.getElementById("charImg").src = charImg;

let eatValue = localStorage.getItem("eatValue");
document.getElementById("food").value = eatValue;
let playValue = localStorage.getItem("playValue");
document.getElementById("play").value = playValue;
let sleepValue = localStorage.getItem("sleepValue");
document.getElementById("sleep").value = sleepValue;
let healValue = localStorage.getItem("healValue");
document.getElementById("health").value = healValue;

// let minuteValue = localStorage.getItem("minuteValue");
// let hourValue = localStorage.getItem("hourValue");
// let dayValue = localStorage.getItem("dayValue");

window.addEventListener('load', () => {
    circle.style.left = 0;
    circle.style.top = 0;
    changeImagePlay();
});

window.addEventListener('keydown', (e) => {
switch (e.keyCode) {
    case 37:
        circle.style.left = parseInt(circle.style.left) - moveBy + 'px';
        if (parseInt(circle.style.left) < 0) {
            circle.style.left = 0;
        }  
        circle.style.transform = "scaleX(-1)";
        collision();
        break;
    case 39:
        circle.style.left = parseInt(circle.style.left) + moveBy + 'px';
        if (parseInt(circle.style.left) > 550) {
            circle.style.left = parseInt(circle.style.left) - moveBy + 'px';
        } 
        circle.style.transform = "scaleX(1)";
        collision();
        break;
    case 38:
        circle.style.top = parseInt(circle.style.top) - moveBy + 'px';
        if (parseInt(circle.style.top) < 0) {
            circle.style.top = 0;
        }
        collision();
        break;
    case 40:
        circle.style.top = parseInt(circle.style.top) + moveBy + 'px';
        if (parseInt(circle.style.top) > 150) {
            circle.style.top = parseInt(circle.style.top) - moveBy + 'px';
        } 
        collision();
        break;
    default:
    break;
}
});

function goLeft() {
    circle.style.left = parseInt(circle.style.left) - moveBy + 'px';
    if (parseInt(circle.style.left) < 0) {
        circle.style.left = 0;
    }  
    circle.style.transform = "scaleX(-1)";
    collision();
}
function goRight() {
    circle.style.left = parseInt(circle.style.left) + moveBy + 'px';
    if (parseInt(circle.style.left) > 550) {
        circle.style.left = parseInt(circle.style.left) - moveBy + 'px';
    } 
    circle.style.transform = "scaleX(1)";
    collision();
}
function goUp() {
    circle.style.top = parseInt(circle.style.top) - moveBy + 'px';
    if (parseInt(circle.style.top) < 0) {
        circle.style.top = 0;
    }
    collision();
}
function goDown() {
    circle.style.top = parseInt(circle.style.top) + moveBy + 'px';
    if (parseInt(circle.style.top) > 150) {
        circle.style.top = parseInt(circle.style.top) - moveBy + 'px';
    }
    collision();
}

function collision() {
    const circleRect = circle.getBoundingClientRect();
    const squareRect = square.getBoundingClientRect();
    
    if (circleRect.left < squareRect.right &&
        circleRect.right > squareRect.left &&
        circleRect.top < squareRect.bottom &&
        circleRect.bottom > squareRect.top) {
        randomPos();
        score++;
        // const scoreDisplay = document.querySelector('#score');
        // scoreDisplay.textContent = `Score: ${score}`;
    }
}

function randomPos() {
    const parentRect = game.getBoundingClientRect();
    const squareRect = square.getBoundingClientRect();
  
    const maxWidth = parentRect.width - squareRect.width;
    const maxHeight = parentRect.height - squareRect.height;
  
    const randomX = Math.floor(Math.random() * maxWidth);
    const randomY = Math.floor(Math.random() * maxHeight);
  
    square.style.left = randomX + 'px';
    square.style.top = randomY + 'px';
}

function updateTimer() {
    const timerDisplay = document.querySelector('#timer');
    timerDisplay.textContent = `Time left: ${timer}s`;
    if (timer === 0) {
        clearInterval(timerInterval);
        alert('Time is up!');
        finishGame();
    } else {
        timer--;
    }
}
  
let timerInterval = setInterval(updateTimer, 1000);
  
function finishGame() {
    // let eat = localStorage.getItem("statEat");
    // let sleep = localStorage.getItem("statSleep");
    // let play = localStorage.getItem("statPlay");
    
    healValue -= 20;
    sleepValue -= 20;
    // play = parseInt(currPlay);
    playValue = playValue + (score * 2);

    localStorage.setItem("eatValue", eatValue);
    localStorage.setItem("sleepValue", sleepValue);
    localStorage.setItem("playValue", playValue);
    localStorage.setItem("healValue", healValue);
    window.location.href = '/main.html';
}

function changeImagePlay(){
    var img = document.querySelector('#charImg');
    var oldSrc = img.src;
    if(oldSrc.includes("dog1-idle.gif"))
    {
        var newSrc = "Source/dog1-play.gif";
        img.src = newSrc;
    }

    if(oldSrc.includes("dog2-idle.gif"))
    {
        var newSrc = "Source/dog2-play.gif";
        img.src = newSrc;
    }

    if(oldSrc.includes("dog3-idle.gif"))
    {
        var newSrc = "Source/dog3-play.gif";
        img.src = newSrc;
    }
    if(oldSrc.includes("cat1-idle.gif"))
    {
        var newSrc = "Source/cat1-play.gif";
        img.src = newSrc;
    }

    if(oldSrc.includes("cat2-idle.gif"))
    {
        var newSrc = "Source/cat2-play.gif";
        img.src = newSrc;
    }

    if(oldSrc.includes("cat3-idle.gif"))
    {
        var newSrc = "Source/cat3-play.gif";
        img.src = newSrc;
    }
}