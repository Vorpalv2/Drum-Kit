
var loopender = document.querySelectorAll(".drum").length;

for (var i = 0; i < loopender; i++) {
   document.querySelectorAll(".drum")[i].addEventListener("click",function(){
   
    var innerHTMLswitch = this.innerHTML;

    switch (innerHTMLswitch) {
        case "w":
            var firstAudio = new Audio("sounds/tom-1.mp3");
            firstAudio.play();
            break;

        case "a":
            var secondAudio = new Audio("sounds/tom-2.mp3");
            secondAudio.play();
            break;
        
        case "s":
            var thirdAudio = new Audio("sounds/tom-3.mp3");
            thirdAudio.play();
            break;
        case "d":
            var fourthAudio = new Audio("sounds/tom-4.mp3");
            fourthAudio.play();
            break;
        case "j":
            var fifthAudio = new Audio("sounds/snare.mp3");
            fifthAudio.play();
        case "k":
            var sixthAudio = new Audio("sounds/kick-bass.mp3");
            sixthAudio.play();
            break;
        case "l":
            var seventhAudio = new Audio("sounds/crash.mp3");
            seventhAudio.play();
            break;
        default:
            console.log(innerHTMLswitch);
            break;
    }
  });

   
       

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