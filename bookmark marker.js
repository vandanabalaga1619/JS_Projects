// Example Valid URLs: https://learning.ccbp.in/, https://www.google.com/
let bookmarkFormEl = document.getElementById("bookmarkForm");

let siteNameInputEl = document.getElementById("siteNameInput");
let siteNameErrMsgEl = document.getElementById("siteNameErrMsg");

let siteUrlInputEl = document.getElementById("siteNameInput");
let siteUrlErrMsgEl = document.getElementById("siteUrlErrMsg");

let submitBtnEl = document.getElementById("submitBtn");
let bookmarksListEl = document.getElementById("bookmarksList");

siteNameInputEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteNameErrMsgEl.textContent = "Required*";
    } else {
        siteNameErrMsgEl.textContent = "";
    }
});

siteUrlInputEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        siteUrlErrMsgEl.textContent = "Required*";
    } else {
        siteUrlErrMsgEl.textContent = "";
    }
});

function validateUrl(siteNameInputEl, siteUrlInputEl) {
    if (siteNameInputEl.value === "") {
        siteNameErrMsgEl.textContent = "Required*";
    }
    if (siteUrlInputEl.value === "") {
        siteUrlErrMsgEl.textContent = "Required*";
    }

    let listItemEl = document.createElement("li");
    bookmarksListEl.appendChild(listItemEl);

    let headingEl = document.createElement("h1");
    headingEl.textContent = siteNameInputEl.value;
    listItemEl.appendChild(headingEl);

    let anchorEl = document.createElement("a");
    let url = siteUrlInputEl.value;
    anchorEl.href = "https://www.google.com/";
    anchorEl.textContent = "https://www.google.com/";
    listItemEl.appendChild(anchorEl);
    anchorEl.addEventListener("click", function() {
        anchorEl.classList.target = "_blank";
    });
    bookmarksListEl.classList.remove("d-none");
}

bookmarkFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    validateUrl(siteNameInputEl, siteUrlInputEl);

});