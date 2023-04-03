const eatBtn = document.querySelector('#btneat');
const playBtn = document.querySelector('#btnplay');
const sleepBtn = document.querySelector('#btnsleep');
const healBtn = document.querySelector('#btnheal');
let eatProgress = document.querySelector('#food');
let sleepProgress = document.querySelector('#sleep');
let playProgress = document.querySelector('#play');
let healProgress = document.querySelector('#health');
const petName = localStorage.getItem("petName");
const charImg = localStorage.getItem("charImg");
document.getElementById("charImg").src = charImg;

let eatValue = localStorage.getItem("eatValue");
document.getElementById("food").value = eatValue;
let playValue = localStorage.getItem("playValue");
document.getElementById("play").value = playValue;
let sleepValue = localStorage.getItem("sleepValue");
document.getElementById("sleep").value = sleepValue;
let healValue = localStorage.getItem("healValue");
document.getElementById("health").value = healValue;

// const foodValue = document.getElementById("food").value;
// const playValue = document.getElementById("play").value;
// const sleepValue = document.getElementById("sleep").value;
// const healValue = document.getElementById("heal").value;

let minute = 0;
let hour = 0;
let day = 0;
// let minute;
// let hour;
// let day;

// if (localStorage.getItem("minuteValue") >= 0) {
//     minute = localStorage.getItem("minuteValue");
// } else {
//     minute = 0;
// }
// if (localStorage.getItem("hourValue") >= 0) {
//     hour = localStorage.getItem("hourValue");
// } else {
//     hour = 0;
// }
// if (localStorage.getItem("dayValue") >= 0) {
//     day = localStorage.getItem("dayValue");
// } else {
//     day = 0;
// }

eatBtn.addEventListener('click', function () {
    eatProgress.value += 30;
    sleepProgress.value -= 10;
    localStorage.setItem("eatValue", eatProgress.value);
    localStorage.setItem("sleepValue", sleepProgress.value);
});

sleepBtn.addEventListener('click', function () {
    sleepProgress.value += 80;
    eatProgress.value -= 20;
    healProgress.value += 30;
    playProgress.value -= 30;
    localStorage.setItem("eatValue", eatProgress.value);
    localStorage.setItem("playValue", playProgress.value);
    localStorage.setItem("sleepValue", sleepProgress.value);
    localStorage.setItem("healValue", healProgress.value);
});

// playBtn.addEventListener('click', function () {
//     playProgress.value += 30;
//     healProgress.value -= 20;
//     eatProgress.value -= 15;
//     sleepProgress.value -=15;
// });

healBtn.addEventListener('click', function () {
    healProgress.value += 70;
    sleepProgress.value -= 10;
    localStorage.setItem("sleepValue", sleepProgress.value);
    localStorage.setItem("healValue", healProgress.value);
});

function updateClock() {
    minute += 1;
    if (minute >= 60) {
        hour++;
        minute = 0;
    }
    if (hour >= 24) {
        day++;
        hour = 0;
    }
    // localStorage.setItem("minuteValue", minute);
    // localStorage.setItem("hourValue", hour);
    // localStorage.setItem("dayValue", day);
    var timeString = hour.toString().padStart(2, "0") + ":" + minute.toString().padStart(2, "0");
    document.querySelector('#time').textContent = timeString;
    if (day < 2) {
        document.querySelector('#level').textContent = "Level 1";
    } else if (day < 4) {
        document.querySelector('#level').textContent = "Level 2";
    } else {
        document.querySelector('#level').textContent = "Level 3";
    }

    if (hour >= 18 || hour < 5) {
        document.querySelector('#greet').textContent = "Good Night, " + petName;
        document.body.style.backgroundImage = "url('/Source/Malam.jpg')";
    } else if (hour >= 5 && hour < 12) {
        document.querySelector('#greet').textContent = "Good Morning, " + petName;
        document.body.style.backgroundImage = "url('/Source/Pagi.jpg')";
    } else if (hour >= 12 && hour < 18) {
        document.querySelector('#greet').textContent = "Good Afternoon, " + petName;
        document.body.style.backgroundImage = "url('/Source/Siang.jpg')";
    } else {
        document.querySelector('#greet').textContent = "Good Evening, " + petName;
        document.body.style.backgroundImage = "url('/Source/Sore.jpg')";
    }

    if (day >= 2) {
        var img = document.querySelector('#charImg');
        var oldSrc = img.src;
        if(oldSrc.includes("dog1-idle.gif"))
        {
            var newSrc = "Source/dog2-idle.gif";
            img.src = newSrc;
            setTimeout(function() 
            {
                img.src = oldSrc;
            }, 10000);
        }

        if(oldSrc.includes("cat1-idle.gif"))
        {
            var newSrc = "Source/cat2-idle.gif";
            img.src = newSrc;
            setTimeout(function() 
            {
                img.src = oldSrc;
            }, 10000);
        }
    }
    if (day >= 4) {
        if(oldSrc.includes("dog2-idle.gif"))
        {
            var newSrc = "Source/dog3-idle.gif";
            img.src = newSrc;
            setTimeout(function() 
            {
                img.src = oldSrc;
            }, 10000);
        }
        if(oldSrc.includes("cat2-idle.gif"))
        {
            var newSrc = "Source/cat3-idle.gif";
            img.src = newSrc;
            setTimeout(function() 
            {
                img.src = oldSrc;
            }, 10000);
        }
    }
}
intervalId = setInterval(updateClock, 10);


function reduceStat() {
    eatProgress.value -= 1;
    sleepProgress.value -= 1;
    playProgress.value -= 1;
    healProgress.value -= 1;
    localStorage.setItem("eatValue", eatProgress.value);
    localStorage.setItem("sleepValue", sleepProgress.value);
    localStorage.setItem("playValue", playProgress.value);
    localStorage.setItem("healValue", healProgress.value);

    if (eatProgress.value == 0) {
        healProgress.value -= 10;
    }

    if (healProgress.value == 0) {
        localStorage.clear;
        // alert('You Died');
        alert('You\'ve been given another life');
        eatProgress.value = 50;
        sleepProgress.value = 50;
        playProgress.value = 50;
        healProgress.value = 50;
        localStorage.setItem("eatValue", eatProgress.value);
        localStorage.setItem("sleepValue", sleepProgress.value);
        localStorage.setItem("playValue", playProgress.value);
        localStorage.setItem("healValue", healProgress.value);
        // window.location.href = '/home.html';
    }
}
intervalStat = setInterval(reduceStat, 1000);

function changeImageEat(){
    var img = document.querySelector('#charImg');
    var oldSrc = img.src;
    if(oldSrc.includes("dog1-idle.gif"))
    {
        var newSrc = "Source/dog1-eat.gif";
        img.src = newSrc;
        setTimeout(function() 
        {
            img.src = oldSrc;
        }, 10000);
    }

    if(oldSrc.includes("dog2-idle.gif"))
    {
        var newSrc = "Source/dog2-eat.gif";
        img.src = newSrc;
        setTimeout(function() 
        {
            img.src = oldSrc;
        }, 10000);
    }

    if(oldSrc.includes("dog3-idle.gif"))
    {
        var newSrc = "Source/dog3-eat.gif";
        img.src = newSrc;
        setTimeout(function() 
        {
            img.src = oldSrc;
        }, 10000);
    }
    if(oldSrc.includes("cat1-idle.gif"))
    {
        var newSrc = "Source/cat1-eat.gif";
        img.src = newSrc;
        setTimeout(function() 
        {
            img.src = oldSrc;
        }, 10000);
    }

    if(oldSrc.includes("cat2-idle.gif"))
    {
        var newSrc = "Source/cat2-eat.gif";
        img.src = newSrc;
        setTimeout(function() 
        {
            img.src = oldSrc;
        }, 10000);
    }

    if(oldSrc.includes("cat3-idle.gif"))
    {
        var newSrc = "Source/cat3-eat.gif";
        img.src = newSrc;
        setTimeout(function() 
        {
            img.src = oldSrc;
        }, 10000);
    }
}
function changeImageSleep(){
    var img = document.querySelector('#charImg');
    var oldSrc = img.src;
    if(oldSrc.includes("dog1-idle.gif"))
    {
        var newSrc = "Source/dog1-sleep.gif";
        img.src = newSrc;
        setTimeout(function() 
        {
            img.src = oldSrc;
        }, 10000);
    }

    if(oldSrc.includes("dog2-idle.gif"))
    {
        var newSrc = "Source/dog2-sleep.gif";
        img.src = newSrc;
        setTimeout(function() 
        {
            img.src = oldSrc;
        }, 10000);
    }

    if(oldSrc.includes("dog3-idle.gif"))
    {
        var newSrc = "Source/dog3-sleep.gif";
        img.src = newSrc;
        setTimeout(function() 
        {
            img.src = oldSrc;
        }, 10000);
    }
    if(oldSrc.includes("cat1-idle.gif"))
    {
        var newSrc = "Source/cat1-sleep.gif";
        img.src = newSrc;
        setTimeout(function() 
        {
            img.src = oldSrc;
        }, 10000);
    }

    if(oldSrc.includes("cat2-idle.gif"))
    {
        var newSrc = "Source/cat2-sleep.gif";
        img.src = newSrc;
        setTimeout(function() 
        {
            img.src = oldSrc;
        }, 10000);
    }

    if(oldSrc.includes("cat3-idle.gif"))
    {
        var newSrc = "Source/cat3-sleep.gif";
        img.src = newSrc;
        setTimeout(function() 
        {
            img.src = oldSrc;
        }, 10000);
    }
}
function changeImageHeal(){
    var img = document.querySelector('#charImg');
    var oldSrc = img.src;
    if(oldSrc.includes("dog1-idle.gif"))
    {
        var newSrc = "Source/dog1-heal.gif";
        img.src = newSrc;
        setTimeout(function() 
        {
            img.src = oldSrc;
        }, 10000);
    }
    if(oldSrc.includes("dog2-idle.gif"))
    {
        var newSrc = "Source/dog2-heal.gif";
        img.src = newSrc;
        setTimeout(function() 
        {
            img.src = oldSrc;
        }, 10000);
    }

    if(oldSrc.includes("dog3-idle.gif"))
    {
        var newSrc = "Source/dog3-heal.gif";
        img.src = newSrc;
        setTimeout(function() 
        {
            img.src = oldSrc;
        }, 10000);
    }
    if(oldSrc.includes("cat1-idle.gif"))
    {
        var newSrc = "Source/cat1-heal.gif";
        img.src = newSrc;
        setTimeout(function() 
        {
            img.src = oldSrc;
        }, 10000);
    }

    if(oldSrc.includes("cat2-idle.gif"))
    {
        var newSrc = "Source/cat2-heal.gif";
        img.src = newSrc;
        setTimeout(function() 
        {
            img.src = oldSrc;
        }, 10000);
    }

    if(oldSrc.includes("cat3-idle.gif"))
    {
        var newSrc = "Source/cat3-heal.gif";
        img.src = newSrc;
        setTimeout(function() 
        {
            img.src = oldSrc;
        }, 10000);
    }
}