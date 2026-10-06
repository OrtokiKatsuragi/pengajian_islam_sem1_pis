let newNumber = 0;
let listRecords = [];

const constNumber = document.getElementById("number"),
constPlus1 = document.getElementById("plus1"),
constMinus1 = document.getElementById("minus1"),
constRecordButton = document.getElementById("recordButton"),
constResetButton = document.getElementById("resetButton"),
constRecords = document.getElementById("records"),
constResetRecordButton = document.getElementById("resetRecordsButton"),
constSolatJemaah = document.getElementById("solatJemaah");

constPlus1.addEventListener("click", _plus1);
constMinus1.addEventListener("click", _minus1);
constRecordButton.addEventListener("click", _record);
constResetButton.addEventListener("click", _reset);
constSolatJemaah.addEventListener("click", _solatJemaah);
//constResetRecordButton.addEventListener("click", resetRecords);

function updateDisplay() {
    constNumber.textContent = newNumber;
}

function updateRecords() {
    if (newNumber == 0) {
        window.alert("You cannot record an empty number")
    }
    else {
        constRecords.innerHTML = "";
        for (i = 0; i < listRecords.length; i++) {
            constRecords.innerHTML += `${i + 1}) ${listRecords[i]}<br>`;
        }
    }
}

/* function resetRecords() {
    listRecords.length = 0;
    listRecords.textContent(newNumber);
    updateRecords();
    updateDisplay();
} */

function _plus1() {
    newNumber += 1;
    updateDisplay();
}

function _minus1() {
    newNumber -= 1;
    updateDisplay();
}

function _solatJemaah() {
    newNumber = newNumber + 27;
    updateDisplay();
}

function _record() {
    listRecords.push(newNumber);
    updateRecords();
    newNumber = 0;
    updateDisplay();
}

function _reset() {
    newNumber = 0;
    updateDisplay();
}