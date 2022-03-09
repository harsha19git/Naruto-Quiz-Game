let score = document.getElementById('score');
score.innerText='score';
function convert(q , aq) {
    let x = document.getElementById(q);
    x.remove();
    let y = document.getElementById(aq);
    y.style.display="block";
    y.style.marginLeft="525px";
    y.style.marginBottom="45px";
    y.style.marginTop="45px";

    if(aq == 'aq1') {
        y.style.marginTop="500px";  
    }
    
} 
 let counter = 0;
function count() {
    counter++
  
    let x = document.body;
    if(counter == 1) {
        x.style.backgroundColor="yellowGreen";
    }
   
    if (counter == 2) {
        x.style.backgroundColor="rgb(30, 104, 98)";
    }

    if (counter == 3) {
        x.style.backgroundColor="black";
    }

    if (counter == 4) {
        x.style.backgroundColor="rgb(138, 31, 31)"; 
        counter = 0;
    }
  
    
    
}


var correctAns = 0; 
var incorrectAns = 0;
let assign = 0;
function changeColor (correct , inc , q , isGreen) {
     assign++;
    
    let a = document.getElementById(correct);
    a.remove();
    
    let b = document.getElementsByClassName(inc);
    i = 0;
    while(b.length != 0) {
        b[i].remove();
    }
    let c = document.getElementById(q);

  let d = document.createElement('span');
  if(isGreen) {
    d.innerHTML="Yohoo..Correct!";
    d.style. boxShadow= "10px 10px 80px yellowGreen";
    d.classList.add("goGreen");
    correctAns++;
    score.innerText = correctAns;
    if(correctAns == 3) 
    alert("Congratulations! you made it to Jonin level");
   

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
    teamLeader(assign);
}
    
    c.appendChild(d);
    num++;

}

function teamLeader() {
    
    if( correctAns == 5) {
        alert("Congratulations! Your Team leader is Jiraiya!");
    }

    if(correctAns == 4 && incorrectAns == 1) {
        alert("Congratulations! Your Team leader is Tsunade!");
    }

    if(correctAns == 3  && incorrectAns == 2) {
        alert("Congratulations! Your Team leader is Orochimaru!");
    }

}


let timer = 100;
let countDown = document.getElementById("countDown");

let timerFunction = () => {
    if(assign == 5 || incorrectAns == 3) {
        clearInterval(interval);

    }
   
    timer = timer - 1;
    console.log(timer);
    countDown.innerText = timer;
    if(timer == 0)
    {
      clearInterval(interval);
      countDown.innerText = "stop!";
      let buttons = document.querySelectorAll(".btn");
        for(i = 0; i < buttons.length; i++){
         buttons[i].setAttribute('disabled' ,'true');
      }


    }
    
}

interval = setInterval(timerFunction,600);
