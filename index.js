
var loopender = document.querySelectorAll(".drum").length;

for (var i = 0; i < loopender; i++) {
   document.querySelectorAll(".drum")[i].addEventListener("click",eventPressed);
}


function eventPressed(){
    alert("I got pressed");
}


function add(num1,num2){
    return num1+num2;
}
function subtract(num1,num2){
    return num1-num2;

}
function multiply(num1,num2){
    return num1*num2;
}
function divide(num1,num2){
    return num1/num2;
}
function modulo(num1,num2){
    return num1%num2;
}

function calculator(num1,num2,operator){
    return operator(num1,num2);
}