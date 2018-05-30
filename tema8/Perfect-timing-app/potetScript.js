var electron = require("electron");
var ipcRenderer = electron.ipcRenderer;



var duration = {
    "min": 0,
    "sec":2,
    "initialMin": ""
};

var timeTextObject,
    unitTextObject;

var startButton = document.getElementsByClassName('start-btn');
var resetButton = document.getElementsByClassName('reset-btn');

var body = document.body;

for (var i = 0; i < startButton.length; i++) {
    startButton[i].addEventListener('click', knappetrykkFunksjon);
}

for (var i = 0; i < resetButton.length; i++) {
    resetButton[i].addEventListener('click', resetFunksjon);
}

function resetFunksjon(event){
    console.log('trykket på reset');

    this.parentNode.classList.remove('active');

    resetClock();

}

var intervalObj;

function knappetrykkFunksjon(event) {

    //Skjule knappen etter at den er trykket på
    duration.min = this.dataset.counterDuration;
    duration.initialMin = this.dataset.counterDuration;

    var textTargetElement = document.getElementById(this.dataset.textTarget);

    timeTextObject = textTargetElement.querySelector('.duration__time');
    unitTextObject = textTargetElement.querySelector('.duration__unit');

    this.parentNode.classList.add('active');
    //unitTextObject.classList.add('hidden');

    body.classList.add('active');

    // Start interval timer
    intervalObj = setInterval(handleInterval, 1000);

    function handleInterval() {

        if (duration.min == 0 && duration.sec == 0) {

            clearInterval(intervalObj);
            playAlarm("Perfect timing!");

            timeTextObject.classList.add('small');
            unitTextObject.classList.add('hidden');
        } else {

            countDown(true);
            showDuration();
        }
    }
}

// Nedtellingsfunksjon
function countDown(start) {
    
    if(start){
        duration.sec = duration.sec - 1;

        if (duration.sec < 0) {
            duration.min = duration.min - 1;
            duration.sec = 59;
        }
    }else{
        
        clearInterval(intervalObj);
        duration.min = duration.initialMin;
        duration.sec = 0;
    }

}

function showDuration() {

    var min = duration.min;
    var sec = duration.sec;

    if (min < 10) {
        min = '0' + min;
    }
    if (sec < 10) {
        sec = '0' + sec;
    }

    timeTextObject.textContent = min + ':' + sec;
}

function playAlarm(text) {
    timeTextObject.textContent = text;

    ipcRenderer.sendSync('counterDone', text);

}

function resetClock() {

    countDown(false);

    timeTextObject.textContent = duration.min;


    unitTextObject.classList.remove('hidden');
    timeTextObject.classList.remove('small');
    body.classList.remove('active');
}