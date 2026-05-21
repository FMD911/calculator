const display = document.querySelector("#display");
const buttons = document.querySelectorAll("#buttons button");

let currentInput = "";
let isResult = false;

const operators = ["+", "-", "*", "/"];

function updateDisplay() {
  display.textContent = currentInput || "0";
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "C") {
      currentInput = "";
      isResult = false;
      updateDisplay();
      return;
    }

    if (value === "=") {
      try {
        currentInput = String(eval(currentInput));
      } catch {
        currentInput = "";
        display.textContent = "Error";
        return;
      }
      isResult = true;
      updateDisplay();
      return;
    }

    if (isResult && !operators.includes(value)) {
      currentInput = "";
      isResult = false;
    }

    const lastChar = currentInput[currentInput.length - 1];

    if (operators.includes(value)) {
      if (currentInput === "") return; 

      if (operators.includes(lastChar)) {
       
        currentInput = currentInput.slice(0, -1) + value;
        updateDisplay();
        return;
      }
    }

    currentInput += value;
    updateDisplay();
  });
});