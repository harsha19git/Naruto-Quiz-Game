// Question 1
var correctAns = 0; 
var incorrectAns = 0;
var assign = 0;
function changeColor (correct , inc , q , isGreen) {
    assign++;
    let a = document.getElementById(correct);
    a.remove();
    
    let b = document.getElementsByClassName(inc);
    i = 0;
    while(b.length != 0) {
        b[i].remove();
    }
    let c = document.getElementsByClassName(q);

  let d = document.createElement('span');
  if(isGreen) {
    d.innerHTML="Yohoo..Correct!";
    d.style. boxShadow= "10px 10px 50px yellowGreen";
    d.classList.add("goGreen");
    correctAns++;
    if(correctAns == 3) {
        alert("Congratulations! you made it to Genin level");
  
    }
  }
  else {
    d.innerHTML="Woopsiee..Wrong!";
    d.style. boxShadow= "10px 10px 80px rgb(253, 5, 5)";
    d.classList.add("goRed"); 
    incorrectAns++;
    if(incorrectAns == 3)
    alert("Give it another try! You'll get there.");

    
  }

  


  if(assign == 5) {
      teamLeader();
  }
    
    c[0].appendChild(d);
    num++;
}



let counter = 0;
function count() {
    counter++
   let x = document.body;
    if (counter == 1) {
        x.style.backgroundColor="black";
    }

    if(counter == 2) 
    {
        x.style.backgroundColor="rgb(214, 95, 59)";
        counter = 0;   
    }
   
}




function teamLeader() {
    
    if(correctAns == 5) {
        alert("Congratulations! Your Team leader is Kakashi Hatake!");
    }

    if(correctAns == 4 && incorrectAns == 1) {
        alert("Congratulations! Your Team leader is Asuma Sarutobi!");
    }

    if(correctAns == 3  && incorrectAns == 2) {
        alert("Congratulations! Your Team leader is Mighty Guy!");
    }

}




