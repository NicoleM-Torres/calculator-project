// GET BUTTON INFO
const buttons = document.querySelectorAll(".numBtn p");
const display = document.querySelector(".displayBox h1");

// INIT DISPLAY
let displayValue = "";

//FUNCTION -- UPDATE DISPLAY
const updateDisplay = (value) => {
  display.textContent = value;
};

// FUNCTION -- CLICKS
buttons.forEach((button) => {
  button.parentElement.addEventListener("click", () => {
    const buttonValue = button.textContent;

    // Handle CLEAR BUTTON (CLEARS DISPLAY)
    if (buttonValue === "AC") {
      displayValue = "";
      updateDisplay(displayValue);
      return;
    }

    // HANDLES CE BUTTON (CLEAR USER ENTRY)
    if (buttonValue === "CE") {
      displayValue = displayValue.slice(0, -1);
      updateDisplay(displayValue);
      return;
    }

    // = BUTTON
    if (buttonValue === "=") {
      try {
        displayValue = eval(displayValue);
        updateDisplay(displayValue);
      } catch (error) {
        updateDisplay("Error");
      }
      return;
    }

    // OTHER BUTTON CLICKS
    displayValue += buttonValue;
    updateDisplay(displayValue);
  });
});
