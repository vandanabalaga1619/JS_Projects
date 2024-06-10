let arr = [1, 7, 3, 1, 0, 20, 77];
let startIndexInputEl = document.getElementById("startIndexInput");
let deleteCountInputEl = document.getElementById("deleteCountInput");
let itemToAddInputEl = document.getElementById("itemToAddInput");
let spliceBtn = document.getElementById("spliceBtn");
let updatedArray = document.getElementById("updatedArray");

function convertArrToJSONStringify() {
    const stringifiedArray = JSON.stringify(arr);
    updatedArray.textContent = stringifiedArray;
}
convertArrToJSONStringify();

spliceBtn.onclick = function spliceArray() {
    let startIndex = startIndexInputEl.value;
    let deleteCount = deleteCountInputEl.value;
    let itemToAdd = itemToAddInputEl.value;

    if (startIndex === "") {
        alert("Enter start index");
        return;
    }
    if (deleteCount === "") {
        deleteCount = 0;
    }
    if (itemToAdd === "") {
        arr.splice(startIndex, deleteCount);
    } else {
        arr.splice(startIndex, deleteCount, itemToAdd);
    }

    startIndexInputEl.value = "";
    deleteCountInputEl.value = "";
    itemToAddInputEl.value = "";
    convertArrToJSONStringify();
};