const display = document.getElementById('display');
let currentInput = '';
let isLightMode = false;

function input(value) {
    currentInput += value;
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.value = '';
}

function deleteChar() {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        display.value = currentInput;
    } catch (e) {
        display.value = 'Error';
        currentInput = '';
    }
}

// Theme switcher for dark/light mode
document.querySelector('.theme-switcher').addEventListener('click', () => {
    isLightMode = !isLightMode;
    document.body.classList.toggle('light-mode', isLightMode);
    document.getElementById('theme-mode').innerText = isLightMode ? 'Light Mode' : 'Dark Mode';
});

// Initialize the calculator in dark mode
display.value = '';
