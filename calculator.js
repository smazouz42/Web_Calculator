//*************************** Global variables *******************************//
let result;
let oldResult = 0;
//******************************** DOM Elements ******************************//
const input = document.querySelector('.result');
const numbers = document.querySelectorAll('.number')
const operators = document.querySelectorAll('.operator')
const equal = document.querySelector('.equal');
const delet =  document.querySelector('.DEL');
const scf = document.querySelector('.scf');
//******************************** functions *******************************//

input.focus();

function clickNumber(event)
{
    if(result !== undefined)
    {
        result = (result + event.target.textContent);
        input.value = result;
    }
    else
    {
        result = event.target.textContent
    }
    input.value = result;

}

function clickOperator(event)
{
    if(result !== undefined)
    {
        op = event.target.textContent;
        result = result + event.target.textContent;
    }
    else
        result = event.target.textContent;
    input.value = result;
}
/**
 * calculate screen hook
 */
function calculate()
{
    try {
        result = eval(result);
        oldResult = result;
        input.value = result;
    } catch (error) {
        window.alert("Syntax error");
        remove();
        oldResult = 0;
    }
}
//******************************** Event hooks *******************************//
equal.addEventListener('click',calculate);
function remove()
{
    result = undefined;
    input.value = 0;
}
delet.addEventListener('click',remove);

scf.addEventListener('click',function()
{
    input.value = oldResult;
});

input.addEventListener("keyup", function(event) {
    if(event.code === "Enter")
        calculate();
    else
        result = input.value;
  });

numbers.forEach(function (number){
    number.addEventListener('click', clickNumber);
})

operators.forEach(function(operator){
    operator.addEventListener('click', clickOperator);
})