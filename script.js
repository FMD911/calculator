const display = document.querySelector("#display");
const buttons = document.querySelectorAll("#buttons button");

let currentInput = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "C") {
      currentInput = "";
      display.textContent = "0";
      return;
    }

    if (value === "=") {
      try {
        currentInput = eval(currentInput);
        display.textContent = currentInput;
      } catch {
        display.textContent = "Error";
        currentInput = "";
      }
      return;
    }

    currentInput += value;
    display.textContent = currentInput;
  });
});