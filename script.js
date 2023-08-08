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
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
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
        if (this.currentOperand ==="") return;
        if (this.previousOperand !== "") {
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = "";
;
    }
    // function to compute the numbers and operations
    compute() {
        let computation;
        // converting strings back to numbers/floats for calculations
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        // checking if number selected or not. Code won't run if not number.
        if(isNaN(prev) || isNaN(current)) return;
        switch (this.operation) {
            // addition
            case "+":
                computation = prev + current
                break
            //s ubtraction
            case "−":
                computation = prev - current
                break
            // division
            case "÷":
                computation = prev / current
                break
            // multiplication
            case "×":
                computation = prev * current
                break
            default:
                return
        }
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = "";
    }

    // Create helper function to add commas to large numbers
    getDisplayNumber(number) {
        const stringNumber = number.toString();
        const integerNumbers = parseFloat(stringNumber.split(".")[0]);
        const decimalNumbers = stringNumber.split(".")[1];
        let integerDisplay;
        if (isNaN(integerNumbers)) {
            integerDisplay = "";
        } else {
            integerDisplay = integerNumbers.toLocaleString("en", {maximumFractionDigits: 0})
        }
        if (decimalNumbers != null) {
            return `${integerDisplay}.${decimalNumbers}`;
        } else {
            return integerDisplay;
        }
    }


    // function to update display of calculator 
    updateDisplay() {
        this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand);
        if (this.operation != null ) {
            this.previousOperandTextElement.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`;
        } else {
            this.previousOperandTextElement.innerText = "";
        }
        
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

// Loop through the operations buttons and add event listener
Array.prototype.forEach.call(operationButtons, (button) => {
    button.addEventListener("click", () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
})

equalsButton.addEventListener("click", () => {
    calculator.compute();
    calculator.updateDisplay();
})

allClearButton.addEventListener("click", () => {
    calculator.clear();
    calculator.updateDisplay();
})

deleteButton.addEventListener("click", () => {
    calculator.delete();
    calculator.updateDisplay();
})

// console.log(operationButtons);