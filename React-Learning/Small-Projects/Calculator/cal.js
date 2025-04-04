function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}   

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function percent(num1, num2) {
    return (num1 * num2) / 100;
}

function clearResult() {
    document.getElementById("result").value = "";
}

function backspaceResult() {
    var result = document.getElementById("result").value;
    document.getElementById("result").value = result.slice(0, -1);
}

function appendToResult(value) {
    document.getElementById("result").value += value;
}

function calculateResult() {
    var result = document.getElementById("result").value;
    try {
        document.getElementById("result").value = eval(result);
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
}