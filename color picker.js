let colorPickerContainerEl = document.getElementById("colorPickerContainer");
let selectedColorHexCodeEl = document.getElementById("selectedColorHexCode");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");
button1.onclick = function() {
    colorPickerContainerEl.style.backgroundColor = "#e0e0e0";
    selectedColorHexCodeEl.textContent = "#e0e0e0";
};
button2.onclick = function() {
    colorPickerContainerEl.style.backgroundColor = "#6fcf97";
    selectedColorHexCodeEl.textContent = "#6fcf97";
};
button3.onclick = function() {
    colorPickerContainerEl.style.backgroundColor = "#56ccf2";
    selectedColorHexCodeEl.textContent = "#56ccf2";
};
button4.onclick = function() {
    colorPickerContainerEl.style.backgroundColor = "#bb6bd9";
    selectedColorHexCodeEl.textContent = "#bb6bd9";
};