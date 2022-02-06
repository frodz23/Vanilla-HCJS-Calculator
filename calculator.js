
var displayValue = "";
function display(value) {
    let displayDiv = document.getElementById("display");
    displayValue += String(value);
    displayDiv.innerHTML = displayValue;
}

function clearDisplay() {
    let displayDiv = document.getElementById("display");
    displayValue = "";
    console.log(displayValue)
    displayDiv.innerHTML = displayValue;
}

function deleteLastChar() {
    let displayDiv = document.getElementById("display");
    displayValue = displayValue.slice(0, -1);
    displayDiv.innerHTML = displayValue;
}

function calculateDisplay() {
    let displayDiv = document.getElementById("display");
    displayValue = "";
    displayDiv.innerHTML = "Error";
}