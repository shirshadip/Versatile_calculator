/**
 * Terms for Arothmatic progression
 */
function tn_ap(a, n, d) {
    return a + (n - 1) * d;
}

function showtn() {
    const a = Number(document.getElementById('a-tn').value);
    const n = Number(document.getElementById('n-tn').value);
    const d = Number(document.getElementById('d-tn').value);

    const output = document.getElementById('terms-ap');

    // ---- Validation Layer ----
    if (Number.isNaN(a) || Number.isNaN(n) || Number.isNaN(d)) {
        output.innerHTML = "❌ Please enter valid numeric values.";
        return;
    }

    if (!Number.isInteger(n) || n < 1) {
        output.innerHTML = "❌ n must be a positive integer (n ≥ 1).";
        return;
    }

    // ---- Computation Layer ----
    const result = tn_ap(a, n, d);

    // ---- Presentation Layer ----
    output.innerHTML = `
        <p>
            t<sub>${n}</sub> = ${a} + (${n} − 1) × ${d}<br>
            <strong>= ${result}</strong>
        </p>
    `;
}
/**
 * Sum of Arithmetic proogression
 */
function sn_ap(a, n, d) {
    return a + (n - 1) * d;
}

function showsn() {
    const a = Number(document.getElementById('a-tn').value);
    const n = Number(document.getElementById('n-tn').value);
    const d = Number(document.getElementById('d-tn').value);

    const output = document.getElementById('terms-ap');

    // ---- Validation Layer ----
    if (Number.isNaN(a) || Number.isNaN(n) || Number.isNaN(d)) {
        output.innerHTML = "❌ Please enter valid numeric values.";
        return;
    }

    if (!Number.isInteger(n) || n < 1) {
        output.innerHTML = "❌ n must be a positive integer (n ≥ 1).";
        return;
    }

    // ---- Computation Layer ----
    const result = tn_ap(a, n, d);

    // ---- Presentation Layer ----
    output.innerHTML = `
        <p>
            t<sub>${n}</sub> = ${a} + (${n} − 1) × ${d}<br>
            <strong>= ${result}</strong>
        </p>
    `;
}