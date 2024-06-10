let jokeTextEl = document.getElementById("jokeText");
let jokeBtnEl = document.getElementById("jokeBtn");
let spinnerEl = document.getElementById("spinner");
let options = {
    method: "GET"
};

function getRandomJoke() {
    spinnerEl.classList.toggle("d-none");
    jokeTextEl.classList.toggle("d-none");
    let url = "https://apis.ccbp.in/jokes/random";

    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            let randomJoke = jsonData.value;
            spinnerEl.classList.toggle("d-none");
            jokeTextEl.classList.toggle("d-none");

            jokeTextEl.textContent = randomJoke;
        });
}
jokeBtnEl.addEventListener("click", getRandomJoke);