function showfmaSI() {
    const m = Number(document.getElementById('m1').value);
    const a = Number(document.getElementById('a1').value);

    const result = m*a;
    document.getElementById('displayfmaSI').innerHTML=`
    <p>F=${m}x${a} is =>${result} Newton</p>
    `;
}
function showfmaCGS() {
    const m = Number(document.getElementById('m1').value);
    const a = Number(document.getElementById('a1').value);

    const result = m*a;
    document.getElementById('displayfmaCGS').innerHTML=`
    <p>F=${m}x${a} is =>${result} Dyne</p> 
    `;
}