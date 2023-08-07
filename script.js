
function BACKSPC(){
    var a = document.calculator.result.value;
    document.calculator.result.value = a.substr(0, a.length-1);
}
function square(){
    document.calculator.result.value=Math.pow(document.calculator.result.value, 2);
}
function quibbed(){
    document.calculator.result.value=Math.pow(document.calculator.result.value, 3);
}
function sqrt2(){
    document.calculator.result.value=Math.pow(document.calculator.result.value, 1/2);
}
function sqrt3(){
    document.calculator.result.value=Math.pow(document.calculator.result.value, 1/3);
}
function number(value){
    document.calculator.result.value += value;
}
function remv(){
    document.calculator.result.value = " ";
}
function equal(){
    document.calculator.result.value = eval(document.calculator.result.value);
}