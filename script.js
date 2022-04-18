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
  if (num2 != 0) return num1 / num2;
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
const display = document.querySelector(".display");
const numButtons = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");

const plus = document.querySelector("#plus");

numButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    content = e.target.textContent;
    display.textContent += content;
  });
});

equal.addEventListener("click", () => {
  num2 = display.textContent;
  display.textContent = operate(operator, +num1, +num2);
});

operators.forEach((button) => {
  button.addEventListener("click", (e) => {
    num1 = display.textContent;
    display.textContent = "";
    operator = e.target.textContent;
    console.log(operator);
  });
});

// plus.addEventListener("click", () => {
//   num1 = display.textContent;
//   display.textContent = "";
//   operator = plus.textContent;
//   console.log(operator);
// });
