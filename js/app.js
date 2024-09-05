// GET BUTTON INFO
const buttons = document.querySelectorAll(".numBtn");
const display = document.querySelector("#display");

// INT DISPLAY VAL
let displayValue = "";

//FUNCTION -- DISPLAY TO PAGE
const updateDisplay = (value) => {
  display.textContent = value || "0"; // Default to "0" when empty
};

//FUNCTION -- MANAGE BUTTON CLICKS
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonValue = button.textContent;

    //AC BUTTON TO FUNCTION
    if (buttonValue === "AC") {
      displayValue = "";
      updateDisplay(displayValue);
      return;
    }

    //CLEAR ALL USER ENTRY BUTTON
    if (buttonValue === "CE") {
      displayValue = displayValue.slice(0, -1);
      updateDisplay(displayValue);
      return;
    }

    //= BUTTON
    if (buttonValue === "=") {
      try {
        displayValue = eval(displayValue); // VERIFIES EXPRESSION
        updateDisplay(displayValue);
        displayValue = ""; // CLEARS AFTER VERIFYING
      } catch (error) {
        updateDisplay("Error");
        displayValue = "";
      }
      return;
    }

    //PREVENTS HAVING DIFFERENT OPERATORS AT THE SAME TIME
    if (["+", "-", "*", "/", "%"].includes(buttonValue)) {
      const lastChar = displayValue.slice(-1);
      if (["+", "-", "*", "/", "%"].includes(lastChar)) {
        displayValue = displayValue.slice(0, -1);
      }
    }

    //UPDATES DISPLAY VALUE TO THE BUTTON CLICKED VALUES
    displayValue += buttonValue;
    updateDisplay(displayValue);
  });
});
