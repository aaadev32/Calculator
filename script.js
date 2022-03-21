const screen = document.getElementById('calculator-screen');
const buttons = document.querySelectorAll('button');
const operatorButtons = document.getElementsByClassName('operator-buttons');
const operandButtons = document.getElementsByClassName('operand-buttons');
const clearButton = document.getElementById('clear-button');
const equalsButton = document.getElementById('equals-button');
const textOperators = ['+', '-', '+', '/'];
let calculation = {};
let displayValue = null;
let temp = '';
let event = null;
let operator = null;


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

};


function operate(operator, num1, num2) {

	let result = null;

  if(operator == '+') {

    result = add(num1, num2);

  }else if (operator == '-') {

    result = subtract(num1, num2);

  }else if (operator == '*') {

    result = multiply(num1, num2);

  }else if (operator == '/') {

    result = divide(num1, num2);

  }

  return result;

}

function populateDisplay(num) {

  displayValue = document.getElementById('calculator-screen').textContent += num;

  return displayValue;

}

function clearScreen(){
	let temp2 = screen.textContent = '';
	let result = populateDisplay(temp2);
	return result;
}

//will need to make all the 'button' args in my if statements refer to respective button functions.
Array.from(buttons).forEach(button => {
  button.addEventListener('click', () => {
	

	event = button.textContent;
	
	
    populateDisplay(event);
    if(button == operandButtons){
		
		console.log(temp);
		temp += event;
		
	}else if(button == operatorButtons){ //when operator buttons class is chosen this trigger doesnt work
		
		operator = button.textContent;
		calculation.num1 = parseInt(temp);
		calculation.operators = operator;
		temp = '';
		
	}else if(button == equalsButton){ 
		
		calculation.num2 = parseInt(temp);
		populateDisplay(operate(calculation.operators, calculation.num1, calculation.num2));
		temp = '';
		
	}else if(button == clearButton){
		
		clearScreen();
		calculation = {};
		temp = '';
		
	}
	console.log(calculation);
	});
 
});
