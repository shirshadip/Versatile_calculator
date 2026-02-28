
const display = document.getElementById('display');

function appendValue(value) {
    if (display.value === '0' || display.value === 'Error') {
        display.value = value;
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    display.value = '0';
    display.classList.add('shake');
    setTimeout(() => display.classList.remove('shake'), 300);
}

function deleteLast() {
    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1);
    } else {
        display.value = '0';
    }
}

function calculate() {
    try {
        const result = eval(display.value.replace('×', '*').replace('÷', '/').replace('−', '-'));
        display.value = Number.isFinite(result) ? (Math.round(result * 100000000) / 100000000).toString() : 'Error';
    } catch (error) {
        display.value = 'Error';
        setTimeout(() => {
            display.value = '0';
        }, 1500);
    }
}

document.addEventListener('keydown', (e) => {
    const key = e.key;
    
    if (/[0-9.]/.test(key)) {
        e.preventDefault();
        appendValue(key);
    }
    
    if (key === '+' || key === '-') {
        e.preventDefault();
        appendValue(key);
    }
    
    if (key === '*') {
        e.preventDefault();
        appendValue('*');
    }
    
    if (key === '/') {
        e.preventDefault();
        appendValue('/');
    }
    
    if (key === 'Enter' || key === '=') {
        e.preventDefault();
        calculate();
    }
    
    if (key === 'Backspace') {
        e.preventDefault();
        deleteLast();
    }
    
    if (key === 'Escape' || key === 'Delete') {
        e.preventDefault();
        clearDisplay();
    }
});

window.addEventListener('load', () => {
    display.value = '0';
});
