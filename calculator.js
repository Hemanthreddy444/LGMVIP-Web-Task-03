let display = document.getElementById('display');
let currentInput = '';
let currentOperator = '';
let result = 0;

function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function appendOperator(operator) {
  if (currentInput === '') return;
  if (currentOperator !== '') {
    calculate();
  }
  currentOperator = operator;
  result = parseFloat(currentInput);
  currentInput = '';
}

function calculate() {
  if (currentInput === '' || currentOperator === '') return;
  switch (currentOperator) {
    case '+':
      result += parseFloat(currentInput);
      break;
    case '-':
      result -= parseFloat(currentInput);
      break;
    case '*':
      result *= parseFloat(currentInput);
      break;
    case '/':
      result /= parseFloat(currentInput);
      break;
  }
  currentInput = '';
  currentOperator = '';
  updateDisplay();
}

function clearDisplay() {
  currentInput = '';
  currentOperator = '';
  result = 0;
  updateDisplay();
}

function updateDisplay() {
  display.value = currentInput !== '' ? currentInput : result;
}
