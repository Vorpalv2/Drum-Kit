
var loopender = document.querySelectorAll(".drum").length;

for (var i = 0; i < loopender; i++) {
   document.querySelectorAll(".drum")[i].addEventListener("click",eventPressed);
}


function eventPressed(){
    alert("I got pressed");
}