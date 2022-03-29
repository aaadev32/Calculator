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
	let temp2 = screen.textContent = '';
	let result = populateDisplay(temp2);
	return result;
}

function deleteLastChar(str){//havent tested yet due to unfinished event listener causing errors
	str.pop();
	return str;
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
		calculation = {
			textsum: ''
			};
		temp = '';
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
		
	}else if(button == deleteButton){
		let string = temp
		
		temp = temp.slice(0, -1);
		string = string.slice(0, -1);
		calculation.textsum = string;
		clearScreen();
		populateDisplay(calculation.textsum);
	}
	console.log(calculation);
	});
	
});

//keyboard event listener allows inputs using keyboard
window.addEventListener('keydown', function(e) {
	const keys = document.querySelectorAll(`button[data-key='${e.keyCode}']`);
	if(!keys){
		return;
	}
	
	if(event.keyCode === 49){
		document.querySelectory('data-key="49"').click();
	}else if(event.keyCode === 50){
		document.querySelectory('data-key="50"').click();
	}else if(event.keyCode === 51){
		document.querySelectory('data-key="51"').click();
	}else if(event.keyCode === 52){
		document.querySelectory('data-key="52"').click();
	}else if(event.keyCode === 53){
		document.querySelectory('data-key="53"').click();
	}else if(event.keyCode === 54){
		document.querySelectory('data-key="54"').click();
	}else if(event.keyCode === 55){
		document.querySelectory('data-key="55"').click();
	}else if(event.keyCode === 56){
		document.querySelectory('data-key="56"').click();
	}else if(event.keyCode === 57){
		document.querySelectory('data-key="57"').click();
	}else if(event.keyCode === 42){
		document.querySelectory('data-key="42"').click();
	}else if(event.keyCode === 43){
		document.querySelectory('data-key="43"').click();
	}else if(event.keyCode === 48){
		document.querySelectory('data-key="48"').click();
	}else if(event.keyCode === 49){
		document.querySelectory('data-key="49"').click();
	}else if(event.keyCode === 61){
		document.querySelectory('data-key="61"').click();
	}else if(event.keyCode === 67){
		document.querySelectory('data-key="67"').click();
	}else if(event.keyCode === 173){
		document.querySelectory('data-key="173"').click();
	}else if(event.keyCode === 191){
		document.querySelectory('data-key="191"').click();
	}else if(event.keyCode === 8){
		document.querySelectory('data-key="8"').click();
	}
	
});
//when chaining operator operand pairings the calculation does not use the previous operator but the operator in the current event 
//when calculating calculation.sum
// or maybe i have no idea but some funky shit is happening with the way the calulation object and operate are interacting
