const screen = document.getElementById('calculator-screen');
const buttons = document.querySelectorAll('button');
const clearButton = document.getElementById('clear-button');
const equalsButton = document.getElementById('equals-button');
let displayValue = null;
let temp = '';
let event = null;
let operator = null;
let calculation = {};


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
	
	let temp = null;
	let result = null;

  if(operator == '+') {

    temp = add(num1, num2);

  }else if (operator == '-') {

    temp = subtract(num1, num2);

  }else if (operator == '*') {

    temp = multiply(num1, num2);

  }else if (operator == '/') {
	
	if(num1 == 0 || num2 == 0){
		
		return alert('error, cannot divide from 0');
		
	}
	temp = divide(num1, num2);
    
  }
	result = temp.toFixed(2);
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

Array.from(buttons).forEach(button => {
  button.addEventListener('click', () => {
	let container = null;
	
	
	event = button.textContent;
	
    populateDisplay(event);
    if(button.className == 'operator-buttons'){ //when operator buttons class is chosen this trigger doesnt work
		
		operator = button.textContent;
		calculation.num1 = parseInt(temp);
		calculation.operators = operator;
		temp = '';
		
	}else if(button.className == 'operand-buttons'){//this one doesnt work either
		
		console.log(temp);
		temp += event;
		
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

//make the num1 and num2 values calculate when they are populated and save the output in a variable
//so that a user may input multiple arithmatic arguments such as 39 - 20 + 123 / 4
