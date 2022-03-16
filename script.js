const screen = document.getElementById('calculator-screen');
const buttons = document.querySelectorAll('button');
//displayValue is global to carry the value for screenDisplay until displaying output or clearing screen
let displayValue = null;

function add(num1, num2) {

  let result = num1 + num2;

  return result;

};

function subtract(num1, num2) {

  let result = num1 - num2;

  return result;

};

function multiply(num1, num2) {

  let result = num1 * num2;

  return result;
};

function divide(num1, num2) {

  let result = num1 / num2;

  return result;

}

function operate(operator, num1, num2) {

  if (operator == '+') {

    add(num1, num2);

  } else if (operator == '-') {

    subtract(num1, num2);

  } else if (operator == '*') {

    multiply(num1, num2);

  } else if (operator == '/') {

    divide(num1, num2);

  }


  return result;

}

function screenDisplay(num) {

  displayValue = document.getElementById('calculator-screen').textContent += num;

  return displayValue;

}

Array.from(buttons).forEach(button => {
  button.addEventListener('click', () => {
    let event = null;
    event = button.textContent;
    screenDisplay(event);
    console.log(event);
  });
 
});
console.log(buttons);
