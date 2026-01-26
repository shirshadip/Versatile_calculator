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
        document.getElementById("display").innerText="please enter a valid number to evaluate the facti";
        return;

    }
    const result=fact(number);
    document.getElementById('display').innerText=`Factorial=${number} is ${result}`
}