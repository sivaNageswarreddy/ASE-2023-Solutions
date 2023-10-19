document.addEventListener('DOMContentLoaded', function () {
    const display = document.forms.calculator.answer;
    const buttons = document.querySelectorAll('input[type="button"]');
    function appendToDisplay(value) {
      display.value += value;
    }

 
    function clearDisplay() {
      display.value = '';
    }

    function calculateResult() {
      try {
        const expression = display.value.replace(/÷/g, '/').replace(/×/g, '*');
        display.value = eval(expression);
      } catch (error) {
        display.value = 'Error';
      }
    }
    buttons.forEach(button => {
      button.addEventListener('click', function () {
        const value = button.value;

        if (value === ' AC') {
          clearDisplay();
        } else if (value === '=') {
          calculateResult();
        } else {
          appendToDisplay(value);
        }
      });
    });
  });