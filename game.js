let circle = document.querySelector('#char');
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


window.addEventListener('load', () => {
circle.style.left = 0;
circle.style.top = 0;
});

window.addEventListener('keydown', (e) => {
switch (e.keyCode) {
    case 37:
        circle.style.left = parseInt(circle.style.left) - moveBy + 'px';
        if (parseInt(circle.style.left) < 0) {
            circle.style.left = 0;
        }  
        circle.style.transform = "scaleX(1)";
        collision();
        break;
    case 39:
        circle.style.left = parseInt(circle.style.left) + moveBy + 'px';
        if (parseInt(circle.style.left) > 550) {
            circle.style.left = parseInt(circle.style.left) - moveBy + 'px';
        } 
        circle.style.transform = "scaleX(-1)";
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
    circle.style.transform = "scaleX(1)";
    collision();
}
function goRight() {
    circle.style.left = parseInt(circle.style.left) + moveBy + 'px';
    if (parseInt(circle.style.left) > 550) {
        circle.style.left = parseInt(circle.style.left) - moveBy + 'px';
    } 
    circle.style.transform = "scaleX(-1)";
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
        alert('Game over!');
        
        let eat = localStorage.getItem("statEat");
        let sleep = localStorage.getItem("statSleep");
        let play = localStorage.getItem("statPlay");
        
        eat -= 40;
        sleep -= 40;
        // play = parseInt(currPlay);
        play = play + scoreNow;
    

        localStorage.setItem("curr-Eat", currEat);
        localStorage.setItem("curr-Sleep", currSleep);
        localStorage.setItem("curr-Play", currPlay);
        window.location = 'main.html';
    } else {
        timer--;
    }
}
  
let timerInterval = setInterval(updateTimer, 1000);
  