class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }
    // function for functionality of clear button to clear all input
    clear() {
        this.currentOperand = "";
        this.previousOperand = "";
        this.operation = "";
    }
    // function for functionality of delete button to delete input
    delete() {

    }
    // function for selection of numbers
    appendNumber(number) {
        // allow only one period for decimals to be appended
        if(number === "." && this.currentOperand.includes(".")) return;

        // convert to string so numbers clicked get appended and not added mathematically
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }
    // function for operations
    chooseOperation(operation) {

    }
    // function to compute the numbers and operations
    compute() {

    }
    // function to update display of calculator 
    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand;
    }
}

const numberButtons = document.getElementsByClassName("js-number");
const operationButtons = document.getElementsByClassName("js-operation");
const equalsButton = document.getElementById("js-equals");
const deleteButton = document.getElementById("js-delete");
const allClearButton = document.getElementById("js-all-clear");
const previousOperandTextElement = document.getElementById("js-prev-operand");
const currentOperandTextElement = document.getElementById("js-curr-operand");

// create calculator, pass elements into constructor
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

// Loop through the number buttons and add event listener
Array.prototype.forEach.call(numberButtons, (button) => {
    button.addEventListener("click", () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})

// console.log(typeof(numberButtons));