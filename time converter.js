let convertBtnEl = document.getElementById("convertBtn");

convertBtnEl.addEventListener("click", function getSeconds() {
    let hoursInputEl = parseInt(document.getElementById("hoursInput").value);
    let minutesInputEl = parseInt(document.getElementById("minutesInput").value);
    let seconds = ((hoursInputEl) * 60 + minutesInputEl) * 60;

    let errMsgEl = document.getElementById("errorMsg");
    let showSeconds = document.getElementById("timeInSeconds");
    let buttonEl = document.createElement("btn");
    buttonEl.classList.add("show-seconds");
    buttonEl.textContent = seconds + "s";

    if (isNaN(hoursInputEl)) {
        errMsgEl.textContent = "please enter a valid number of hours.";
        errMsgEl.style.color = "#f7faf5";
        showSeconds.textContent = "";
    } else if (isNaN(minutesInputEl)) {
        errMsgEl.textContent = "please enter a valid number of minutes.";
        errMsgEl.style.color = "#f7faf5";
        showSeconds.textContent = "";
    } else {
        showSeconds.appendChild(buttonEl);
        errMsgEl.textContent = "";
    }

});