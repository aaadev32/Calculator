const screen = document.getElementById('calculator-screen');
const buttons = document.getElementsByClassName('buttons');

function operate(operator, num1, num2) {

  result = operator(num1, num2);

  return result;

}

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

function screenDisplay(value) {

  let temp = null;

  temp += value;
  
  return temp

}

buttons.addEventListener('click', () => {

});

console.log(multiply(3, 1));