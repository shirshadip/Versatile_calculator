function showfma() {
    const m = Number(document.getElementById('m1').value);
    const a = Number(document.getElementById('a1').value);

    const result = m*a;
    document.getElementById('displayfma').innerHTML=`
    <p>F=${m}x${a} is =>${result}</p>
    `;
}