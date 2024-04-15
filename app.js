let currentResult = 0;

addBtn.addEventListener("click", add)

function add(){
let calculationDescription = currentResult + " + "+ userInput.value;
currentResult = currentResult+parseInt(userInput.value);
outputResult(currentResult, calculationDescription);
}

subtractBtn.addEventListener("click", subtract)

function subtract(){
let calculationDescription = currentResult + " - "+ userInput.value;
currentResult = currentResult - parseInt(userInput.value);
outputResult(currentResult, calculationDescription);
}

multiplyBtn.addEventListener("click", multiply)

function multiply(){
let calculationDescription = currentResult + " * "+ userInput.value;
currentResult = currentResult * parseInt(userInput.value);
outputResult(currentResult, calculationDescription);
}

divideBtn.addEventListener("click", divide)

function divide(){
let calculationDescription = currentResult + " / "+ userInput.value;
currentResult = currentResult / parseInt(userInput.value);
outputResult(currentResult, calculationDescription);
}