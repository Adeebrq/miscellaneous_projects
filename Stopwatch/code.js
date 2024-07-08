// ASSIGNING THE VALUES
const startStopBtn= document.querySelector('#startStopBtn');
const resetBtn= document.querySelector('#resetBtn');

// VARIABLES FOR TIME VALUES
let secounds=0;
let minutes=0;
let hours=0;
let leadingSecounds=0;
let leadingMinutes=0;
let leadingHours=0;

// variables for starting timer when clicked
let timerInterval= null;
let timerStatus= "stopped";

//STOPWATCH FUCNTION
function stopWatch(){
    secounds++
    if(secounds/60 === 1){
        secounds=0;
        minutes++;
    }
     if(minutes/60===1){
        minutes=0;
        hours++;
    }
    if (secounds<10){
        leadingSecounds= "0" + secounds.toString();
    }
    else {
        leadingSecounds= secounds;
    }
    if (minutes<10){
        leadingMinutes= "0" + minutes.toString();
    }
    else {
        leadingMinutes= minutes;
    }
    if (hours<10){
        leadingHours= "0" + hours.toString();
    }
    else {
        leadingHours= hours;
    }
    let displayTimer= document.getElementById('timer').innerText = leadingHours + ":" + leadingMinutes + ":" + leadingSecounds;
}


startStopBtn.addEventListener('click', function(){

    if(timerStatus === "stopped"){
        timerInterval = window.setInterval(stopWatch, 1000);
        document.getElementById('startStopBtn').innerHTML= `<i class="fa-solid fa-pause" id="pause"></i>`;
        timerStatus= "started";
    } else {
        window.clearInterval(timerInterval);
        document.getElementById('startStopBtn').innerHTML = `<i class= "fa-solid fa-play" id="play"></i>`;
        timerStatus= "stopped";
     }
});

resetBtn.addEventListener('click', function(){

    window.setInterval(timerInterval);
    secounds=0;
    minutes=0;
    hours=0;
    document.getElementById("timer").innerHTML= "00:00:00";
})


