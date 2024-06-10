let fromUserInputEl = document.getElementById("fromUserInput");
let toUserInputEl = document.getElementById("toUserInput");
let counterTextEl = document.getElementById("counterText");

function displayNumbers(fromValInteger, toValInteger) {
    let currentCount = fromValInteger;
    counterTextEl.textContent = currentCount;

    let timerId = setInterval(function() {
        if (currentCount < toValInteger) {
            currentCount += 1;
            counterTextEl.textContent = currentCount;
        } else {
            clearInterval(timerId);
        }
    }, 1000);
}

function onClickStart() {
    let fromUserVal = fromUserInputEl.value;
    let toUserVal = toUserInputEl.value;

    if (fromUserVal === "") {
        alert("Enter the from value");
        return;
    } else if (toUserVal === "") {
        alert("Enter the to value");
        return;
    } else {
        let fromValInteger = parseInt(fromUserVal);
        let toValInteger = parseInt(toUserVal);
        displayNumbers(fromValInteger, toValInteger);
    }
}