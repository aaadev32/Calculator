const screen = document.getElementById('calculator-screen');
const buttons = document.querySelectorAll('button');
const operatorButtons = document.getElementsByClassName('operator-buttons');
const operandButtons = document.getElementsByClassName('operand-buttons');
const clearButton = document.getElementById('clear-button');
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

function populateDisplay(num) {

  displayValue = document.getElementById('calculator-screen').textContent += num;

  return displayValue;

}

function clearScreen(){
	let result = '';
	populateDisplay(result);
}

Array.from(buttons).forEach(button => {
  button.addEventListener('click', () => {
	let event = null;
	let selected = button;
	let temp = null;
   
	event = button.textContent;
	temp = event;
	
	if(temp != null){
		temp.concat(event);
	}
	
    populateDisplay(event);
	console.log(temp);//its almost as if i cannot concatenate temp because the script "forgets" after executing once. figure out tomorrow 3/17/22
	
	if(button == operatorButtons){
		
		calculation.num1 = parseInt(temp)
		//add num1 to calculation object
		temp = '';
		//i need to make this create a num2 variable somehow to distinguish between the users operands
		
	}else if (selected == clearButton){
		
		clearScreen();
		
	}
	
	});
 
});

