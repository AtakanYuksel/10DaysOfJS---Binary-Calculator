document.getElementById('btn0').addEventListener('click', function()
{
    document.getElementById('res').insertAdjacentHTML('beforeend', '0');
});

document.getElementById('btn1').addEventListener('click', function()
{
    document.getElementById('res').insertAdjacentHTML('beforeend', '1');
});

function operatorAction(eve) {
    var btn = eve.target;
    document.getElementById('res').insertAdjacentHTML('beforeend', btn.innerHTML);
}

document.getElementById('btnSum').onclick = operatorAction;
document.getElementById('btnMul').onclick = operatorAction;
document.getElementById('btnDiv').onclick = operatorAction;
document.getElementById('btnSub').onclick = operatorAction;

document.getElementById('btnClr').onclick = function()
{
    (document.getElementById('res').innerHTML) = "";
};

document.getElementById("btnEql").onclick = function () {
    const opString = document.getElementById('res').innerHTML;
    const operation = opString.match(/[+\-*\/]/);
    const operands = opString.split(/[+\-*\/]/);
    const firstOperand = parseInt(operands[0], 2);
    const secondOperand = parseInt(operands[1], 2);
    switch (operation[0]) {
        case "+":
            document.getElementById("res").innerHTML = (firstOperand + secondOperand).toString(2);
            console.log("+");
            break;
        case "-":
            document.getElementById("res").innerHTML = (firstOperand - secondOperand).toString(2);
            console.log("-");
            break;
        case "*":
            document.getElementById("res").innerHTML = (firstOperand * secondOperand).toString(2);
            console.log("*");
            break;
        case "/":
            document.getElementById("res").innerHTML = (Math.floor(firstOperand / secondOperand)).toString(2);
            console.log("/");
            break;
    }
};
