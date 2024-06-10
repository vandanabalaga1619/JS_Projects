let timerEl = document.getElementById("timer");
let spinnerEl = document.getElementById("spinner");

let quoteDisplayEl = document.getElementById("quoteDisplay");
quoteDisplayEl.style.color = "#323f4b";

let quoteInputEl = document.getElementById("quoteInput");

let resultEl = document.getElementById("result");

let submitBtnEl = document.getElementById("submitBtn");
let resetBtnEl = document.getElementById("resetBtn");

let url = "https://apis.ccbp.in/random-quote";
let options = {
    method: "GET"
};

function fetchurl() {
    spinnerEl.classList.remove("spinner");
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            spinnerEl.classList.add("spinner");
            quoteDisplayEl.textContent = jsonData.content;
        });
}
fetchurl();

let count = 0;
let uniqueId;

function startTimer() {
    uniqueId = setInterval(function() {
        count += 1;
        timerEl.textContent = count + "  seconds";
    }, 1000);
}
startTimer();

function validate() {
    if (quoteDisplayEl.textContent === quoteInputEl.value) {
        resultEl.textContent = "You typed in " + timerEl.textContent;
        quoteInputEl.textContent = "";
        clearInterval(uniqueId);
    } else {
        resultEl.textContent = "You typed incorrect sentence";
        quoteInputEl.textContent = "";
    }
}

function reset() {
    fetchurl();
    count = 0;
    resultEl.textContent = "";
    startTimer();
}

submitBtnEl.addEventListener("click", function(event) {
    event.preventDefault();
    validate();
});

resetBtnEl.addEventListener("click", function(event) {
    event.preventDefault();
    reset();
});