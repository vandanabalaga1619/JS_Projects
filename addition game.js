let firstNumber = document.getElementById("firstNumber");
let secondNumber = document.getElementById("secondNumber");
let userInput = document.getElementById("userInput");
let gameResult = document.getElementById("gameResult");
let successMsg = "Congratulations! You got it right!";
let tryAgainMsg = "Please try again!";

function restartButton() {
    let firstRandomNumber = Math.random() * 100;
    let secondRandomNumber = Math.random() * 100;
    let a = Math.ceil(firstRandomNumber);
    let b = Math.ceil(secondRandomNumber);
    firstNumber.textContent = parseInt(a);
    secondNumber.textContent = parseInt(b);
    gameResult.textContent = "";
    userInput.value = "";
}
restartButton();

function checkButton() {
    let firstRandomInteger = parseInt(firstNumber.textContent);
    let secondRandomInteger = parseInt(secondNumber.textContent);
    let sumOfTwoNumbers = firstRandomInteger + secondRandomInteger;
    let userEnteredNumber = parseInt(userInput.value);
    if (sumOfTwoNumbers === userEnteredNumber) {
        gameResult.textContent = successMsg;
        gameResult.style.backgroundColor = "#028a0f";
    } else {
        gameResult.textContent = tryAgainMsg;
        gameResult.style.backgroundColor = "#1e217c";
    }
}