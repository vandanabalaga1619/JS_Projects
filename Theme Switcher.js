let bgContainer = document.getElementById("bgContainer");
let heading = document.getElementById("heading");
let themeUserInput = document.getElementById("themeUserInput");
let lightImage = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png";
let darkImage = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png";

function changeTheme(event) {
    if (event.key === "Enter") {
        let themeUserInputVal = themeUserInput.value;
        if (themeUserInputVal === "Light") {
            bgContainer.style.backgroundColor = lightImage;
            heading.style.color = "#014d40";
        } else if (themeUserInputVal === "Dark") {
            bgContainer.style.backgroundColor = darkImage;
            heading.style.color = "#ffffff";
        } else {
            alert("Enter the valid theme");
        }
    }
}

themeUserInput.addEventListener("keydown", changeTheme);