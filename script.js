const screen = document.getElementById('calculator-screen');
const buttons = document.querySelectorAll('button');
const clearButton = document.getElementById('clear-button');
const equalsButton = document.getElementById('equals-button');
const deleteButton = document.getElementById('delete');

let displayValue = null;
let temp = '';
let event = null;
let operator = null;
let i = 1;
let calculation = {
	textsum: ''
	};



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
	
    result = temp
    
    if (result % 1 != 0){
		result = temp.toFixed(2)
	}
    return result;
  }
	result = temp;
	return result;

}

function populateDisplay(num) {

  displayValue = document.getElementById('calculator-screen').textContent += num;

  return displayValue;

}

function clearScreen(){
	let tempClear = screen.textContent = '';
	let result = populateDisplay(tempClear);
	return result;
}

function eventClicker(key){
	let eventButton = '';
	eventButton = document.querySelector(`button[data-key="${key}"]`);
	eventButton.click();
}

Array.from(buttons).forEach(button => {
  button.addEventListener('click', () => {
	
	event = button.textContent;
    calculation.textsum += event;
    
    if(button.className == 'operator-buttons'){
	
	populateDisplay(' ');
	populateDisplay(event);
//if the user doesnt input an operand before the operator this if block makes the first operand equal 0
		if(temp == ''){
			temp = 0;
		}
		
		
//this if block is only used once when acquiring the 2nd operand
		if(i == 2){
			calculation.num2 = parseInt(temp);
			calculation.sum = operate(calculation.operators, calculation.num1, calculation.num2); 
			calculation.operators = button.textContent;
		}
		
//this if statement will chain operator operand pairings indefinitley
		if(calculation.sum != undefined && i != 2){
			calculation.num1 = calculation.sum;
			calculation.num2 = parseInt(temp);
			calculation.sum = operate(calculation.operators, calculation.num1, calculation.num2); 
			calculation.operators = button.textContent;
//this else if statement will only run for the first operator operand pairing allowing you to chain operator operand arguments indefinitley
		}else if(calculation.sum == undefined && i == 1){
			calculation.num1 = parseInt(temp);
			calculation.operators = button.textContent;
		}
	
		populateDisplay(' ');
		i++
		temp = '';
//adds button input to temp if a number
	}else if(button.className == 'operand-buttons'){
		
		populateDisplay(event);
		console.log(temp);
		temp += event;
//performs the calculation when the equals button is used
	}else if(button == equalsButton){ 
		
		//when an operand with no operators or opposing operands this returns the input
		if ( calculation.num1 == undefined && calculation.num2 == undefined){
			
			populateDisplay(` ${event} ${temp} `);
			
			return 0;
		}
		populateDisplay(' ');
		populateDisplay(event);
		calculation.num2 = parseInt(temp);
		//clearScreen();
		populateDisplay(' ');
		
		if(calculation.sum != undefined){
			calculation.num1 = calculation.sum;
		}
		
		populateDisplay(operate(calculation.operators, calculation.num1, calculation.num2)); 
		populateDisplay(' ');

		i = 1;
		
//clears the display
	}else if(button == clearButton){
		
		populateDisplay(event);
		clearScreen();
		calculation = {
			textsum: ''
			};
		temp = '';
		i = 1;
		
	}else if(button == deleteButton){ //removed html
		let string = calculation.textsum;
		
		temp = temp.slice(0, -1);
		string = string.slice(0, -1);
		calculation.textsum = string;
		clearScreen();
		populateDisplay(string);
	}
	console.log(calculation);
	console.log(operate(calculation.operators, calculation.num1, calculation.num2));
	});
	
});

//keyboard event listener allows inputs using keyboard
window.addEventListener('keydown', function(e) {
	const keys = document.querySelectorAll(`button[data-key='${e.keyCode}']`);
	if(!keys){
		return;
	}
	
	eventClicker(e.keyCode);
	
	console.log(e);
	
});


