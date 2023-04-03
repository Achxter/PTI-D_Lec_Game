const eatBtn = document.querySelector('#btneat');
const sleepBtn = document.querySelector('#btnsleep');
const playBtn = document.querySelector('#btnplay');
const healBtn = document.querySelector('#btnheal');
const eatProgress = document.querySelector('#food');
const sleepProgress = document.querySelector('#sleep');
const playProgress = document.querySelector('#play');
const healProgress = document.querySelector('#health');

eatBtn.addEventListener('click', function () {
    eatProgress.value += 30;
    sleepProgress.value -= 10;
});

sleepBtn.addEventListener('click', function () {
    sleepProgress.value += 80;
    eatProgress.value -= 20;
    healProgress.value += 30;
});

playBtn.addEventListener('click', function () {
    playProgress.value += 30;
    healProgress.value -= 20;
    eatProgress.value -= 15;
    sleepProgress.value -=15;
});

healBtn.addEventListener('click', function () {
    healProgress.value += 70;
    sleepProgress.value -= 10;
});

function clock() {
    let minute = 0;
    let hour = 0;
    minute++;

    if (minute > 59) {
        minute = 0;
        hour++;
    }

    // Display the time in the format "hh:mm"
    let time = ('0' + hour).slice(-2) + ':' + ('0' + minute).slice(-2);
    document.querySelector('#time').textContent =  time;
}

let clockInterval = setInterval(clock, 1000);