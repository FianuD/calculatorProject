class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
    }
    // function for functionality of clear button to clear all input
    clear() {

    }
    // function for functionality of delete button to delete input
    delete() {

    }
    // function for selection of numbers
    appendNumber(number) {

    }
    // function for operations
    chooseOperation(operation) {

    }
    // function to compute the numbers and operations
    compute() {

    }
    // function to update display of calculator 
    updateDisplay() {

    }
}

const numberButtons = document.getElementsByClassName("js-number");
const operationButtons = document.getElementsByClassName("js-operation");
const equalsButton = document.getElementById("js-equals");
const deleteButton = document.getElementById("js-delete");
const allClearButton = document.getElementById("js-all-clear");
const previousOperandTextElement = document.getElementById("js-prev-operand");
const currentOperandTextElement = document.getElementById("js-curr-operand");


// console.log(typeof(numberButtons));