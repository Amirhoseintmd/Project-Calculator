let display = document.getElementById("display");
let currentInput = "";
let hasDecimal = false;

function appendNumber(num) {
  if (num === "0" && currentInput === "0") return;
  currentInput += num;
  updateDisplay();
}

function appendOperator(op) {
  if (currentInput === "") return;
  const lastChar = currentInput.slice(-1);
  if ("+-*/%".includes(lastChar)) {
    currentInput = currentInput.slice(0, -1) + op;
  } else {
    currentInput += op;
    hasDecimal = false;
  }
  updateDisplay();
}

function appendDot() {
  if (hasDecimal) return;
  currentInput += ".";
  hasDecimal = true;
  updateDisplay();
}

function clearDisplay() {
  currentInput = "";
  hasDecimal = false;
  updateDisplay("0");
}

function deleteLast() {
  if (currentInput.slice(-1) === ".") hasDecimal = false;
  currentInput = currentInput.slice(0, -1);
  updateDisplay(currentInput || "0");
}

function calculate() {
  try {
    currentInput = eval(currentInput).toString();
    updateDisplay();
    hasDecimal = currentInput.includes(".");
  } catch {
    updateDisplay("خطا!");
    currentInput = "";
  }
}

function updateDisplay(value) {
  display.textContent = value || currentInput || "0";
}
