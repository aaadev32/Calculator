const screen = document.getElementById('calculator-screen');
const buttons = document.querySelectorAll('button');
const clearButton = document.getElementById('clear-button');
const equalsButton = document.getElementById('equals-button');

let displayValue = null;
let temp = '';
let event = null;
let operator = null;
let calculation = {};
let i = 1;



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
    result = temp.toFixed(2);
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
	let temp2 = screen.textContent = '';
	let result = populateDisplay(temp2);
	return result;
}

Array.from(buttons).forEach(button => {
  button.addEventListener('click', () => {
	event = button.textContent;
	
    
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
		if(calculation.sum != undefined){
			calculation.num1 = calculation.sum;
			calculation.num2 = parseInt(temp);
			calculation.operators = button.textContent;
			calculation.sum = operate(calculation.operators, calculation.num1, calculation.num2); 
//this else if statement will only run for the first operator operand pairing allowing you to chain operator operand arguments indefinitley
		}else if(calculation.sum == undefined){
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
		populateDisplay(' ');
		populateDisplay(event);
		calculation.num2 = parseInt(temp);
		//clearScreen();
		populateDisplay(' ');
		populateDisplay(operate(calculation.operators, calculation.num1, calculation.num2)); //maybe add calculationSum not sure yet
		populateDisplay(' ');
		calculation = {};
		temp = '';
		i = 1;
//clears the display
	}else if(button == clearButton){
		
		populateDisplay(event);
		clearScreen();
		calculation = {};
		temp = '';
		i = 1;
		
	}
	console.log(calculation);
	});
 
});
//when chaining operator operand pairings the calculation does not use the previous operator but the operator in the current event 
//when calculating calculation.sum
// or maybe i have no idea but some funky shit is happening with the way the calulation object and operate are interacting
