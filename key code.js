let userInput = document.getElementById("userInput");
let keyCodeList = document.getElementById("keyCodeList");

function createAndAppendKeyDown(keyCode) {
    let listItemEl = document.createElement("li");
    listItemEl.classList.add("mt-1");
    listItemEl.textContent = keyCode;
    keyCodeList.appendChild(listItemEl);
}

function onKeyDown(event) {
    createAndAppendKeyDown(event.keyCode);
}

userInput.addEventListener("keydown", onKeyDown);