function add(num1, num2) {
  return num1 + num2;
}

function substract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 != 0) return (num1 / num2).toFixed(3);
  return;
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
let operator = "";
let operation = true;
let isOperating = false;
const display = document.querySelector(".display");
const numButtons = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equal = document.querySelector("#equal");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const multiplier = document.querySelector("#multiply");
const divider = document.querySelector("#divide");
const clear = document.querySelector("#clear");

plus.addEventListener("click", () => {
  if (isOperating) equality();
  operator = "+";
  operation = true;
  isOperating = true;
  num1 = display.textContent;
  console.log(num1);
});

minus.addEventListener("click", () => {
  if (isOperating) equality();
  operator = "-";
  operation = true;
  isOperating = true;
  num1 = display.textContent;
  console.log(num1);
});

multiplier.addEventListener("click", () => {
  if (isOperating) equality();
  operator = "*";
  operation = true;
  isOperating = true;
  num1 = display.textContent;
  console.log(num1);
});

divider.addEventListener("click", () => {
  if (isOperating) equality();
  operator = "/";
  operation = true;
  isOperating = true;
  num1 = display.textContent;
  console.log(num1);
});

numButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (operation) {
      display.textContent = "";
      operation = false;
    }
    display.textContent += e.target.textContent;
  });
});

equal.addEventListener("click", () => {
  equality();
  operator = "";
});

function equality() {
  num2 = display.textContent;
  console.log(num1);
  console.log(num2);
  console.log(operator);
  display.textContent = operate(operator, +num1, +num2);
  operation = true;
  isOperating = false;
}

clear.addEventListener("click", () => {
  display.textContent = "0";
  operator = "";
  operation = true;
  isOperating = false;
});
