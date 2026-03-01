let display = null;

export function init(inputEl) {
    display = inputEl;
    display.value = '0';
}

export function appendValue(value) {
    if (display.value === '0' || display.value === 'Error') {
        display.value = value;
    } else {
        display.value += value;
    }
}

export function clearDisplay() {
    display.value = '0';
    display.classList.add('shake');
    setTimeout(() => display.classList.remove('shake'), 300);
}

export function deleteLast() {
    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1);
    } else {
        display.value = '0';
    }
}

export function calculate() {
    try {
        const result = eval(display.value.replace('×', '*').replace('÷', '/').replace('−', '-'));
        display.value = Number.isFinite(result)
            ? (Math.round(result * 100000000) / 100000000).toString()
            : 'Error';
    } catch (error) {
        display.value = 'Error';
        setTimeout(() => { display.value = '0'; }, 1500);
    }
}

export function initKeyboard() {
    // prevent adding multiple handlers in the same page/app
    if (document.__vc_keydown_handler) {
        return () => {}; // already initialized by this script
    }

    const handler = (e) => {
        const key = e.key;

        if (/[0-9.]/.test(key)) { e.preventDefault(); appendValue(key); return; }
        if (key === '+' || key === '-') { e.preventDefault(); appendValue(key); return; }
        if (key === '*') { e.preventDefault(); appendValue('*'); return; }
        if (key === '/') { e.preventDefault(); appendValue('/'); return; }
        if (key === 'Enter' || key === '=') { e.preventDefault(); calculate(); return; }
        if (key === 'Backspace') { e.preventDefault(); deleteLast(); return; }
        if (key === 'Escape' || key === 'Delete') { e.preventDefault(); clearDisplay(); return; }
    };

    document.addEventListener('keydown', handler);
    // store reference so subsequent calls can detect initialization
    document.__vc_keydown_handler = handler;

    // Return cleanup so callers (React effects) can remove the handler on unmount
    return () => {
        document.removeEventListener('keydown', handler);
        try { delete document.__vc_keydown_handler; } catch (e) { document.__vc_keydown_handler = undefined; }
    };
}