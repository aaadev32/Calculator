const screen = document.getElementById('calculator-screen');
const buttons = document.querySelectorAll('button');
const operatorButtons = document.getElementsByClassName('operator-buttons');
const operandButtons = document.getElementsByClassName('operand-buttons');
const clearButton = document.getElementById('clear-button');
const equalsButton = document.getElementById('equals-button');
let calculation = {};
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

};

function operate(operator, num1, num2) {

	let result = null;

  if (operator == '+') {

    result = add(num1, num2);

  } else if (operator == '-') {

    result = subtract(num1, num2);

  } else if (operator == '*') {

    result = multiply(num1, num2);

  } else if (operator == '/') {

    result = divide(num1, num2);

  }


  return result;

}

function populateDisplay(num) {

  displayValue = document.getElementById('calculator-screen').textContent += num;

  return displayValue;

}

function clearScreen(){
	let temp = screen.textContent = '';
	let result = populateDisplay(temp);
	return result;
}

//will need to make all the 'button' args in my if statements refer to respective button functions.
Array.from(buttons).forEach(button => {
  button.addEventListener('click', () => {
	let event = null;
	let selected = button;
	let temp = null;
	let operator = null;
	
	console.log(selected);
	event = button.textContent;
	temp = event;
	
	if(temp != null){
		temp.concat(event);
	}
	
    populateDisplay(event);
	console.log(temp);
	
	if(button == operandButtons){
		
		calculation.num1 = parseInt(temp);
		temp = '';
		
	}else if(button == operandButtons && calculation.num1 == true){ 
		
		calculation.num2 = parseInt(temp);
		temp = '';
		
	}else if(button == operatorButtons) {
		
		operator = button;
		
	}else if(selected == clearButton){
		
		clearScreen();
		
	}else if (selected == equalsButton){
		
		operate(operator, calculation.num1, calculation.num2);
		
	}
	
	});
 
});

