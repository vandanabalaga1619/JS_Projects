let searchInputEl = document.getElementById("searchInput");
let searchResultsEl = document.getElementById("searchResults");
let spinnerEL = document.getElementById("spinner");

function createAndAppendSearchResult(result) {
    let {
        title,
        link,
        description
    } = result;
    let resultItemEl = document.createElement("div");
    resultItemEl.classList.add("result-item");

    let titleEl = document.createElement("a");
    titleEl.textContent = title;
    titleEl.href = link;
    titleEl.target = "_blank";
    titleEl.classList.add("result-title");
    resultItemEl.appendChild(titleEl);

    let titleBreakEl = document.createElement("br");
    resultItemEl.appendChild(titleBreakEl);

    let urlEl = document.createElement("a");
    urlEl.textContent = link;
    urlEl.href = link;
    urlEl.target = "_blank";
    urlEl.classList.add("result-url");
    resultItemEl.appendChild(urlEl);

    let breakEl = document.createElement("br");
    resultItemEl.appendChild(breakEl);

    let descriptionEl = document.createElement("p");
    descriptionEl.classList.add("link-description");
    descriptionEl.textContent = description;
    resultItemEl.appendChild(descriptionEl);

    searchResultsEl.appendChild(resultItemEl);
}

function displayResults(search_results) {
    spinnerEL.classList.add("d-none");

    for (let result of search_results) {
        createAndAppendSearchResult(result);
    }
}

function searchWikipedia(event) {
    if (event.key === "Enter") {
        spinnerEL.classList.remove("d-none");
        searchInputEl.textContent = "";

        let searchInput = searchInputEl.value;
        let url = "https://apis.ccbp.in/wiki-search?search=" + searchInput;
        let options = {
            method: "GET"
        };
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                let {
                    search_results
                } = jsonData;
                displayResults(search_results);
            });
    }
}
searchInputEl.addEventListener("keydown", searchWikipedia);