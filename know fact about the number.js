let userInputEl = document.getElementById("userInput");
let factEl = document.getElementById("fact");
let spinnerEl = document.getElementById("spinner");

function displayFact(event) {
    spinnerEl.classList.remove("d-none");

    let searchInputVal = userInputEl.value;
    let url = "https://apis.ccbp.in/numbers-fact?number=" + searchInputVal;
    let options = {
        method: "GET"
    };

    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            spinnerEl.classList.add("d-none");
            let {
                fact
            } = jsonData;
            factEl.textContent = fact;
        });
}
userInputEl.addEventListener("keyup", displayFact);