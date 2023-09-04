for(var i = 0; i<7; i++) {
   document.querySelectorAll("button")[i].addEventListener("click", clickHandler); 
}

function clickHandler() {
    var buttonInnerHTML = this.innerHTML;

    switch (buttonInnerHTML) {
        case "w":
            var audio1 = new Audio("sounds/audio1.mp3");
            audio1.play();  
        
        case "a":
            var audio2 = new Audio("sounds/audio2.mp3");
            audio2.play(); 
        
        case "s":
            var audio3 = new Audio("sounds/audio3.mp3");
            audio3.play();
        
        case "d":
            var audio4 = new Audio("sounds/audio4.mp3");
            audio4.play(); 

        case "j":
            var audio5 = new Audio("sounds/audio5.mp3");
            audio5.play(); 

        case "k":
            var audio6 = new Audio("sounds/audio6.mp3");
            audio6.play(); 

        case "l":
            var audio7 = new Audio("sounds/audio7.mp3");
            audio7.play(); 
    }

}