let twentySecondsBtn = document.getElementById("twentySecondsBtn");
let thirtySecondsBtn = document.getElementById("thirtySecondsBtn");
let fortySecondsBtn = document.getElementById("fortySecondsBtn");
let oneMinuteBtn = document.getElementById("oneMinuteBtn");
let timerText = document.getElementById("timerText");

let secondsleft = 0;
let timerCompleted = "Your moment is complete";
let timerId;

function clearPreviousTimers() {
    clearInterval(timerId);
}

function startTimer() {
    if (secondsleft > 1) {
        secondsleft -= 1;
        timerText.textContent = secondsleft + " seconds left";
    } else {
        clearPreviousTimers();
        timerText.textContent = timerCompleted;
    }
}

function setTimerAndShow() {
    timerText.textContent = secondsleft + " seconds left";
    setInterval(startTimer, 1000);
}

twentySecondsBtn.onclick = function() {
    secondsleft = 20;
    clearPreviousTimers();
    setTimerAndShow();
};

thirtySecondsBtn.onclick = function() {
    secondsleft = 30;
    clearPreviousTimers();
    setTimerAndShow();
};

fortySecondsBtn.onclick = function() {
    secondsleft = 40;
    clearPreviousTimers();
    setTimerAndShow();
};

oneMinuteBtn.onclick = function() {
    secondsleft = 60;
    clearPreviousTimers();
    setTimerAndShow();
};