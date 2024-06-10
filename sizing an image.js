let imageElement = document.getElementById("image");
let imageWidthElement = document.getElementById("imageWidth");
let originalImageWidth = 200;
let imageMaxWidth = 300;
let imageMinWidth = 100;
imageElement.style.width = originalImageWidth;
imageWidthElement.textContent = originalImageWidth;

let warningMessage = document.getElementById("warningMessage");
let small = "Can't visible. Increase the size of the image.";
let large = "Too big.Decrease the size of the image.";
let decrementButton = document.getElementById("decrementButton");
decrementButton.onclick = function() {
    if (originalImageWidth <= imageMinWidth) {
        warningMessage.textContent = small;
    } else {
        originalImageWidth = originalImageWidth - 5;
        let updatedImageWidth = originalImageWidth + "px";
        warningMessage.textContent = "";
        imageElement.style.width = updatedImageWidth;
        imageWidthElement.textContent = updatedImageWidth;
    }
};
let incrementButton = document.getElementById("incrementButton");
incrementButton.onclick = function() {
    if (originalImageWidth >= imageMaxWidth) {
        warningMessage.textContent = large;
    } else {
        originalImageWidth = originalImageWidth + 5;
        let updatedImageWidth = originalImageWidth + "px";
        imageElement.style.width = updatedImageWidth;
        imageWidthElement.textContent = updatedImageWidth;
        warningMessage.textContent = "";
    }
};