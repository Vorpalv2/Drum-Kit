
var loopender = document.querySelectorAll(".drum").length;

for (var i = 0; i < loopender; i++) {
   document.querySelectorAll(".drum")[i].addEventListener("click",eventPressed);

   
        switch (switched) {
            case "w":
             var firstAudio = new Audio("sounds/tom-1.mp3");
             firstAudio.play();
             break;

        default:
        break;
}

}

















/*function eventPressed(){
    var audioObject = new Audio("sounds/tom-1.mp3");
    audioObject.play();
}
*/



/*
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
*/

/*
function HouseKeeper(name,age,cleaning,workpermit){
    this.name =name;
    this.age=age;
    this.cleaning= cleaning;
    this.workpermit = workpermit;
};

var firsthousekeeper = new HouseKeeper("Adamn",46,"Bathroom",true);

// new way to declare an object
class HouseCleaner{
    constructor(name,age,cleaning,workpermit){
        this.name = name;
        this.age = age;
        this.workpermit = workpermit;
        this.cleaning = cleaning;
    }
}
*/