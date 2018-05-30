/*
    Perfect timing App
    
    description: A JavaScript poato boiling timer
    
    author: Hedda Brodtkorb
    version: 1.0
    license: Attribution-ShareAlike 4.0 International
*/

var duration = {};
var potatoMin = null;

duration.min = potatoMin;
duration.sec = 0;

var timeTextObject = document.querySelector('.duration__time');
var unitTextObject = document.querySelector('.duration__unit');
var startButton = document.getElementsByClassName('start-btn');
var body = document.body;

for (var i = 0; i < startButton.length; i++) {
    startButton[i].addEventListener('click', knappetrykkFunksjon);
    
}

console.log(startButton);

function knappetrykkFunksjon(event){

    //Skjule knappen etter at den er trykket på
    console.log(this.dataset.counterDuration);
    potatoMin = this.dataset.counterDuration;
    this.parentNode.classList.add('active');


    //unitTextObject.classList.add('hidden');
    console.log('test');
    

    body.classList.add('active');

    // Start interval timer
    var intervalObj = setInterval(handleInterval, 1000);

    function handleInterval(){
        
        if(duration.min == 0 && duration.sec == 0){

            clearInterval(intervalObj);
            playAlarm("Perfect timing!");
            //unitTextObject.classList.add('hidden');
        } else{
            
            countDown();   
            showDuration();
        }
    }
}

// Nedtellingsfunksjon
function countDown(){    
    duration.sec = duration.sec - 1;
   
    if(duration.sec < 0){
        duration.min = duration.min - 1;
        duration.sec = 59;
    }
    console.log(duration);   
}
// Vis nedtelling
function showDuration(){

    var min = duration.min;
    var sec = duration.sec;

    if(min < 10) {
        min = '0' + min;
    }
    if(sec < 10) {
        sec = '0' + sec;
    }

    timeTextObject.textContent = min +':'+ sec;
}
// Signalisere at nedtelling er over
function playAlarm(text){
timeTextObject.textContent = text;
setTimeout(resetClock, 3000);
}
// Nullstill klokken
function resetClock(){
    
    duration.min = pomodoroMin;
    timeTextObject.textContent = duration.min;
    
    startButton.classList.remove('hidden');
    unitTextObject.classList.remove('hidden');
    body.classList.remove('active');   
}