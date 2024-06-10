let billAmountInput = document.getElementById("billAmount");
let percentageTipInput = document.getElementById("percentageTip");
let tipAmountInput = document.getElementById("tipAmount");
let totalAmountInput = document.getElementById("totalAmount");
let errorMessageInput = document.getElementById("errorMessage");
let message = "Please enter a valid input";
let calculateButtonEl = document.getElementById("calculateButton");
calculateButtonEl.onclick = function() {
    if (billAmountInput.value === "" || percentageTipInput.value === "") {
        errorMessageInput.textContent = message;
    } else {
        let billAmount = (billAmountInput.value);
        let percentageTip = (percentageTipInput.value);
        let calculatedTip = (parseInt(percentageTip) / 100) * parseInt(billAmount);
        let totalAmount = parseInt(billAmount) + calculatedTip;
        tipAmountInput.value = calculatedTip;
        totalAmountInput.value = totalAmount;
        errorMessageInput.textContent = "";
    }
};