let stopButtonEl = document.getElementById("stopButton");
let readyButtonEl = document.getElementById("readyButton");
let goButtonEl = document.getElementById("goButton");
let stopLightEl = document.getElementById("stopLight");
let readyLightEl = document.getElementById("readyLight");
let goLightEl = document.getElementById("goLight");
stopButtonEl.onclick = function() {
    stopButtonEl.style.backgroundColor = "#cf1124";
    stopLightEl.style.backgroundColor = "#cf1124";
    readyButtonEl.style.backgroundColor = "#1f1d41";
    readyLightEl.style.backgroundColor = "#4b5069";
    goButtonEl.style.backgroundColor = "#1f1d41";
    goLightEl.style.backgroundColor = "#4b5069";
};
readyButtonEl.onclick = function() {
    stopButtonEl.style.backgroundColor = "#1f1d41";
    stopLightEl.style.backgroundColor = "#4b5069";
    readyButtonEl.style.backgroundColor = "#f7c948";
    readyLightEl.style.backgroundColor = "#f7c948";
    goButtonEl.style.backgroundColor = "#1f1d41";
    goLightEl.style.backgroundColor = "#4b5069";
};
goButtonEl.onclick = function() {
    stopButtonEl.style.backgroundColor = "#1f1d41";
    stopLightEl.style.backgroundColor = "#4b5069";
    readyButtonEl.style.backgroundColor = "#1f1d41";
    readyLightEl.style.backgroundColor = "#4b5069";
    goButtonEl.style.backgroundColor = "#199473";
    goLightEl.style.backgroundColor = "#199473";
};