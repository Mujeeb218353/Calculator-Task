function cal(){
    let num1 = +document.getElementById('number1').value;
    let num2 = +document.getElementById('number2').value;
    let operator = document.getElementById('operator').value;
    document.getElementById('result').innerHTML = 'Result:'+calculator(num1, num2, operator);
}
function calculator(num1, num2, operator){
    switch(operator){
        case '+':
            return (num1+num2);
        case '-':
            return (num1-num2);
        case '*':
            return (num1*num2);
        case '/':
            return (num1/num2);
        case '%':
            return (num1%num2);
        default :
            return 'Please Use Operator...';
    }
}