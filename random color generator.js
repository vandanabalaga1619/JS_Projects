let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];
let bgContainer = document.getElementById("bgContainer");
let button = document.getElementById("button");
bgContainer.style.backgroundColor = bgColorsArray[0];
button.onclick = function() {
    let noOfBgColors = bgColorsArray.length;
    let randomBgColorIndex = Math.ceil(Math.random() * noOfBgColors);
    if (randomBgColorIndex === noOfBgColors) {
        randomBgColorIndex = noOfBgColors - 1;
    }
    let randomBgColor = bgColorsArray[randomBgColorIndex];
    bgContainer.style.backgroundColor = randomBgColor;
};