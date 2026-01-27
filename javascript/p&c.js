function fact(n){
    if (n<=1){
        return 1;

    }
    else{
        return n*fact(n-1);
    }
}
let x =5;
console.log(fact(x))
function showfact(){
    const input = document.getElementById("factinput").value;
    const number=Number(input);
    if (isNaN(number)||number<0) {
        document.getElementById("display").innerText="please enter a valid number to evaluate the factorial";
        return;

    }
    const result=fact(number);
    document.getElementById('display').innerText=`${number}!= ${result}`
}
function calcpermutations(x,y){
    let down = x-y;
    let up= x;
    let result= fact(up)/fact(down);
    return result;
}
function showpermutations(){
    const nforperm=Number(document.getElementById("nforp").value);
    const rforperm=Number(document.getElementById("rforp").value);
    const result= calcpermutations(nforperm,rforperm);
    document.getElementById('displayp').innerHTML=`<p><sup>${nforperm}</sup>P<sub>${rforperm}</sub> = ${result}</p>`;

}
function calccombinations(x,y){
    let down = x-y;
    let up= x;
    let result= fact(up)/(fact(y)*fact(down));
    return result;
}
function showcombinations(){
    const nforcomb=Number(document.getElementById("nforc").value);
    const rforcomb=Number(document.getElementById("rforc").value);
    const result= calccombinations(nforcomb,rforcomb);
    document.getElementById('displayc').innerHTML=`<p><sup>${nforcomb}</sup>c<sub>${rforcomb}</sub> = ${result}</p>`;

}
