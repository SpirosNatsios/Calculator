let num1 = undefined;
let operator = "";
let operation = true;
let isOperating = false;
const display = document.querySelector("p");
const numButtons = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equal = document.querySelector("#equal");
const clear = document.querySelector("#clear");
const backSpace = document.querySelector("#backspase");
const dot = document.querySelector("#dot");

operators.forEach((operators) => {
  operators.addEventListener("click", (e) => {
    if (isOperating) equality();
    operator = e.target.textContent;
    operation = true;
    isOperating = true;
    num1 = display.textContent;
  });
});

numButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (operation) {
      display.textContent = "";
      operation = false;
    }
    if (display.textContent.length >= 10) return;
    display.textContent += e.target.textContent;
  });
});

equal.addEventListener("click", () => {
  if (num1 == undefined) {
    clearScreen();
    display.textContent = "Error";
    return;
  }
  equality();
  operator = "";
});

function equality() {
  num2 = display.textContent;

  display.textContent = operate(operator, +num1, +num2);
  if (display.textContent.length > 10) {
    display.textContent = "Error";
  }
  operation = true;
  isOperating = false;
  num1 = undefined;

  if (display.textContent == "") display.textContent = "Error";
}

clear.addEventListener("click", clearScreen);

function clearScreen() {
  display.textContent = "0";
  operator = "";
  operation = true;
  isOperating = false;
}

backSpace.addEventListener("click", () => {
  if (display.textContent == "Error") display.textContent = "0";
  let displayScreen = display.textContent;
  if (displayScreen == "0") return;
  display.textContent = displayScreen.slice(0, -1);
  if (displayScreen.length == 1) {
    display.textContent = "0";
    operation = true;
  }
});

dot.addEventListener("click", () => {
  if (operation) {
    display.textContent = "0";
    operation = false;
    display.textContent += ".";
    return;
  }
  if (display.textContent.includes(".") || display.textContent.length >= 10)
    return;
  operation = false;
  display.textContent += ".";
});

function add(num1, num2) {
  return num1 + num2;
}

function substract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  if (String(num1 * num2).includes(".")) return (num1 * num2).toFixed(1);
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 != 0) {
    if (String(num1 / num2).includes(".")) {
      outcome = Number((num1 / num2).toString());
      if (String(outcome.length >= 10)) return outcome.toFixed(3);
      return outcome;
    }

    return num1 / num2;
  }
}

function operate(operator, num1, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return substract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
  }
}
