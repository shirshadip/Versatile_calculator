function fact(n) {
    n = BigInt(n);

    if (n < 0n) return null;

    let result = 1n;
    for (let i = 2n; i <= n; i++) {
        result *= i;
    }
    return result;
}

let x = 5;
console.log(fact(x))
function showfact() {
    const number = Number(document.getElementById("factinput").value);
    // 1. Validate type
    if (isNaN(number) || number < 0 || !Number.isInteger(number)) {
        document.getElementById("display").innerText =
            "Please enter a valid non-negative integer";
        return;
    }

    // 2. Validate size
    if (Math.abs(number).toString().length >= 6) {
        document.getElementById("display").innerHTML =
            "<p>Input is too large to calculate</p>";
        return;
    }

    // 3. Safe to calculate
    const result = fact(number);

    document.getElementById("display").innerText =
        `${number}! = ${result.toString()}`;
}

function calcPermutations(n, r) {
    n = BigInt(n);
    r = BigInt(r);

    if (r > n || r < 0n) return null;

    let result = 1n;
    for (let i = 0n; i < r; i++) {
        result *= (n - i);
    }
    return result;
}

function showpermutations() {
    const n = Number(document.getElementById("nforp").value);
    const r = Number(document.getElementById("rforp").value);

    if (isNaN(n) || isNaN(r) || n < r || n < 0 || r < 0) {
        document.getElementById("displayp").innerHTML =
            "<p>Invalid input: n ≥ r ≥ 0 required</p>";
        return;
    }

    const result = calcPermutations(n, r);
    document.getElementById("displayp").innerHTML =
        `<p><sup>${n}</sup>P<sub>${r}</sub> = ${result.toString()}</p>`;
}

function calcCombinations(n, r) {
    n = BigInt(n);
    r = BigInt(r);

    if (r > n || r < 0n) return null;

    r = r > n - r ? n - r : r;

    let result = 1n;
    for (let i = 1n; i <= r; i++) {
        result = result * (n - r + i) / i;
    }
    return result;
}

function showcombinations() {
    const n = Number(document.getElementById("nforc").value);
    const r = Number(document.getElementById("rforc").value);

    if (isNaN(n) || isNaN(r) || n < r || n < 0 || r < 0) {
        document.getElementById("displayc").innerHTML =
            "<p>Invalid input: n ≥ r ≥ 0 required</p>";
        return;
    }

    const result = calcCombinations(n, r);
    document.getElementById("displayc").innerHTML =
        `<p><sup>${n}</sup>C<sub>${r}</sub> = ${result.toString()}</p>`;
}

