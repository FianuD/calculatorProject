class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
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