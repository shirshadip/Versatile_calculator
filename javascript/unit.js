
function showunit() {
    const value = parseFloat(document.getElementById("weightinput").value);
    const fromUnit = document.getElementById("weightfrom").value;
    const toUnit = document.getElementById("weightto").value;
    const output = document.getElementById("displayunitweight");

    if (!value || !fromUnit || !toUnit) {
        output.innerText = "Please fill all fields";
        return;
    }

    if (fromUnit === toUnit) {
        output.innerText = `Result: ${value}`;
        return;
    }

    // Conversion factors (everything converted to grams as base)
    const units = {
        kilo: 1000,      // 1 kilogram = 1000 grams
        mlg: 1,          // 1 gram = 1 gram
        centi: 0.01,      // 1 centigram = 0.01 grams
        pounds:453.59237
    };

    // Convert input value to grams first
    const valueInGrams = value * units[fromUnit];

    // Convert from grams to target unit
    const result = valueInGrams / units[toUnit];

    output.innerText = `Result: ${result.toFixed(4)} ${getUnitName(toUnit)}`;
}

function getUnitName(unit) {
    const names = {
        kilo: 'kg',
        mlg: 'g',
        centi: 'cg'
    };
    return names[unit] || unit;
}

//--------------------------------------------------------------------------//
// Foce unit converter
//--------------------------------------------------------------------------//
function showforce() {
    const input = document.getElementById("forceinput").value.trim();
    const fromUnit = document.getElementById("forcefrom").value;
    const toUnit = document.getElementById("forceto").value;
    const output = document.getElementById("displayforce");

    if (!input || !fromUnit || !toUnit) {
        output.innerText = "Please fill all fields";
        return;
    }

    const value = parseScientificInput(input);

    if (isNaN(value)) {
        output.innerText = "Invalid number format";
        return;
    }

    const units = {
        newton: 1,
        dyne: 100000
    };

    const valueInNewton = value * units[fromUnit];
    const result = valueInNewton / units[toUnit];

    output.innerHTML = `Result: ${formatScientific(result)} ${getforceUnitName(toUnit)}`;
}

/* ---------------- Helper Functions ---------------- */

function parseScientificInput(input) {
    input = input
        .toLowerCase()
        .replace("×", "x")
        .replace(/\s+/g, "");

    // Handle 1x10^5
    if (input.includes("x10^")) {
        const [base, power] = input.split("x10^");
        return Number(base) * Math.pow(10, Number(power));
    }

    // Handle 1e5
    if (input.includes("e")) {
        return Number(input);
    }

    // Normal number
    return Number(input);
}

function formatScientific(num) {
    if (num === 0) return "0";
    if (num === 1) return "1";

    const [coeff, exp] = num.toExponential().split("e");
    const power = parseInt(exp, 10);

    // 10^0 case
    if (power === 0) return Number(coeff).toString();

    return `${Number(coeff)} × 10<sup>${power}</sup>`;
}

function getforceUnitName(unit) {
    const names = {
        newton: "Newton",
        dyne: "Dyne"
    };
    return names[unit];
}

