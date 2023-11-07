document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    let currentInput = "0";
    let currentResult = "0";
    let currentOperator = "";
    let shouldClearDisplay = false;

    const updateDisplay = () => {
        display.textContent = currentInput;
    };

    const clearDisplay = () => {
        currentInput = "0";
        currentResult = "0";
        currentOperator = "";
        updateDisplay();
    };

    const handleNumberClick = (num) => {
        if (currentInput === "0" || shouldClearDisplay) {
            currentInput = num;
            shouldClearDisplay = false;
        } else {
            currentInput += num;
        }
        updateDisplay();
    };

    const handleOperatorClick = (operator) => {
        if (currentOperator !== "") {
            handleEqualClick();
        }
        currentOperator = operator;
        currentResult = currentInput;
        shouldClearDisplay = true;
    };

    const handleEqualClick = () => {
        if (currentOperator !== "") {
            currentResult = operate(currentResult, currentInput, currentOperator);
            currentInput = currentResult;
            currentOperator = "";
            updateDisplay();
        }
    };

    const operate = (num1, num2, operator) => {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        switch (operator) {
            case "+":
                return (num1 + num2).toString();
            case "-":
                return (num1 - num2).toString();
            case "*":
                return (num1 * num2).toString();
            case "/":
                if (num2 === 0) {
                    return "Error";
                }
                return (num1 / num2).toString();
        }
    };

    document.getElementById("clear").addEventListener("click", clearDisplay);
    document.getElementById("zero").addEventListener("click", () => handleNumberClick("0"));
    document.getElementById("one").addEventListener("click", () => handleNumberClick("1"));
    document.getElementById("two").addEventListener("click", () => handleNumberClick("2"));
    document.getElementById("three").addEventListener("click", () => handleNumberClick("3"));
    document.getElementById("four").addEventListener("click", () => handleNumberClick("4"));
    document.getElementById("five").addEventListener("click", () => handleNumberClick("5"));
    document.getElementById("six").addEventListener("click", () => handleNumberClick("6"));
    document.getElementById("seven").addEventListener("click", () => handleNumberClick("7"));
    document.getElementById("eight").addEventListener("click", () => handleNumberClick("8"));
    document.getElementById("nine").addEventListener("click", () => handleNumberClick("9"));
    document.getElementById("decimal").addEventListener("click", () => {
        if (!currentInput.includes(".")) {
            currentInput += ".";
            updateDisplay();
        }
    });

    document.getElementById("add").addEventListener("click", () => handleOperatorClick("+"));
    document.getElementById("subtract").addEventListener("click", () => handleOperatorClick("-"));
    document.getElementById("multiply").addEventListener("click", () => handleOperatorClick("*"));
    document.getElementById("divide").addEventListener("click", () => handleOperatorClick("/"));

    document.getElementById("equals").addEventListener("click", handleEqualClick);
});
