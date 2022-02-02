let counter = 0;
function count() {
    counter++
  
    let x = document.body;

    if (counter == 1) {
        x.style.backgroundColor="rgb(30, 104, 98)";
    }
    if (counter == 3) {
        x.style.backgroundColor="black";
    }
    if (counter == 2) {
        x.style.backgroundColor="rgb(138, 31, 31)";     
    }
    if (counter == 4) {
        x.style.backgroundColor="rebeccaPurple"; 
        counter = 0;    
    }
    
}


window.onload = function() {
    document.getElementById("audio").play();
}



