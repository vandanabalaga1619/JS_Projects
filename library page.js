let searchInputEl = document.getElementById("searchInput");
let searchResultsEl = document.getElementById("searchResults");

let spinnerEl = document.getElementById("spinner");

function createAndAppendSearchResult(result) {
    let {
        title,
        imageLink,
        author
    } = result;
    let resultItemEl = document.createElement("div");
    resultItemEl.classList.add("m-4");

    let imageEl = document.createElement("img");
    imageEl.src = imageLink;
    resultItemEl.appendChild(imageEl);

    let authorEl = document.createElement("p");
    authorEl.textContent = author;
    resultItemEl.appendChild(authorEl);

    searchResultsEl.appendChild(resultItemEl);

}

function displayResults(results) {
    spinnerEl.classList.add("d-none");
    let headingEl = document.createElement("h1");
    headingEl.textContent = "Popular Books";
    searchResultsEl.appendChild(headingEl);
    for (let result of results) {
        createAndAppendSearchResult(result);
    }

}

function searchBooks(event) {
    if (event.key === "Enter") {

        spinnerEl.classList.remove("d-none");
        searchResultsEl.textContent = "";

        let searchInput = searchInputEl.value;
        let url = "https://apis.ccbp.in/book-store?title=" + searchInput;
        let options = {
            method: "GET"
        };

        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                let results = jsonData.search_results;
                displayResults(results);
                console.log(results);
            });
    }
}



searchInputEl.addEventListener("keydown", searchBooks);