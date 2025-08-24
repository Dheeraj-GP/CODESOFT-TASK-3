const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
let currentInput = '';
let operator = '';
let firstNumber = null;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');

    if(button.id === 'clear') {
      currentInput = '';
      firstNumber = null;
      operator = '';
      display.textContent = '0';
    } else if(button.id === 'equals') {
      if(firstNumber !== null && operator !== '' && currentInput !== '') {
        let secondNumber = parseFloat(currentInput);
        let result = calculate(firstNumber, secondNumber, operator);
        display.textContent = result;
        currentInput = result;
        firstNumber = null;
        operator = '';
      }
    } else if(button.classList.contains('operator')) {
      if(currentInput === '') return;
      if(firstNumber === null) {
        firstNumber = parseFloat(currentInput);
        operator = value;
        currentInput = '';
      }
    } else {
      currentInput += value;
      display.textContent = currentInput;
    }
  });
});

function calculate(a, b, op) {
  switch(op) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return b !== 0 ? a / b : 'Error';
    default: return 0;
  }
}
