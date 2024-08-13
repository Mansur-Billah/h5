for( var i=0; i<3; i++){ 
document.querySelectorAll(".mybutton")[i].addEventListener("click", function(){
var text= this.innerHTML;
console.log(text);
nameName(text);
playAnimation(text);

});
}
function nameName(text) {
    switch (text) {
        case "a":
            var audioa= new Audio ("audio/A.mp3.mp3");
            audioa.play();
            break; 
    
             case "b":
            var audioa= new Audio ("b.mp3");
            audioa.play();
            break;
    
            case "c":
                var audioa= new Audio ("c.mp3");
                audioa.play();
                break;
    
        
    };
}

function playAnimation(text){
    var selectedButton= document.querySelector("."+text);
    selectedButton.classList.add("anim");

    setTimeout(function(){
selectedButton.classList.remove("anim");
    }, 1000);
}