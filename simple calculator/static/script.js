// static/script.js

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

async function calculate() {
    const display = document.getElementById('display');
    const expression = display.value;

    try {
        const response = await fetch('/calculate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ expression: expression })
        });

        const result = await response.json();

        if (result.error) {
            display.value = 'Error';
        } else {
            display.value = result.result;
        }
    } catch (error) {
        display.value = 'Error';
    }
}
