// Question 1
var num = 0; 
function goGreen1() {
    let a = document.getElementsByClassName("correct1")[0];
    a.remove();
    
    let b = document.getElementsByClassName("inc1");
    i = 0;
    while(b.length != 0) {
        b[i].remove();
    }
    let c = document.getElementsByClassName("q1");


    let d = document.createElement('span');
    d.innerHTML="Yohoo..Correct!";
    d.classList.add("add");
    c[0].appendChild(d);
    num++;
}



function goRed1() {
    let a = document.getElementsByClassName("correct1")[0];
    a.remove();
    
    let b = document.getElementsByClassName("inc1");
    i = 0;
    while(b.length != 0) {
        b[i].remove();
    }
    let c = document.getElementsByClassName("q1");
    let d = document.createElement('span');
    d.innerHTML="Woopsiee..Wrong!";
    d.classList.add("add1");
    c[0].appendChild(d);

}

// Question 2

function goGreen2() {
    let a = document.getElementsByClassName("correct2")[0];
    a.remove();
    
    let b = document.getElementsByClassName("inc2");
    i = 0;
    while(b.length != 0) {
        b[i].remove();
    }
    let c = document.getElementsByClassName("q2");


    let d = document.createElement('span');
    d.innerHTML="Yohoo..Correct!";
    d.classList.add("add");
    c[0].appendChild(d);
    num++;
}



function goRed2() {
    let a = document.getElementsByClassName("correct2")[0];
    a.remove();
    
    let b = document.getElementsByClassName("inc2");
    i = 0;
    while(b.length != 0) {
        b[i].remove();
    }
    let c = document.getElementsByClassName("q2");
    let d = document.createElement('span');
    d.innerHTML="Woopsiee..Wrong!";
    d.classList.add("add1");
    c[0].appendChild(d);
    
}


// Question 3 
function goGreen3() {
    let a = document.getElementsByClassName("correct3")[0];
    a.remove();
    
    let b = document.getElementsByClassName("inc3");
    i = 0;
    while(b.length != 0) {
        b[i].remove();
    }
    let c = document.getElementsByClassName("q3");


    let d = document.createElement('span');
    d.innerHTML="Yohoo..Correct!";
    d.classList.add("add");
    c[0].appendChild(d);
    num++;
}



function goRed3() {
    let a = document.getElementsByClassName("correct3")[0];
    a.remove();
    
    let b = document.getElementsByClassName("inc3");
    i = 0;
    while(b.length != 0) {
        b[i].remove();
    }
    let c = document.getElementsByClassName("q3");
    let d = document.createElement('span');
    d.innerHTML="Woopsiee..Wrong!";
    d.classList.add("add1");
    c[0].appendChild(d);

}

// Question 4


function goGreen4() {
    let a = document.getElementsByClassName("correct4")[0];
    a.remove();
    
    let b = document.getElementsByClassName("inc4");
    i = 0;
    while(b.length != 0) {
        b[i].remove();
    }
    let c = document.getElementsByClassName("q4");


    let d = document.createElement('span');
    d.innerHTML="Yohoo..Correct!";
    d.classList.add("add");
    c[0].appendChild(d);
    num++;
}



function goRed4() {
    let a = document.getElementsByClassName("correct4")[0];
    a.remove();
    
    let b = document.getElementsByClassName("inc4");
    i = 0;
    while(b.length != 0) {
        b[i].remove();
    }
    let c = document.getElementsByClassName("q4");
    let d = document.createElement('span');
    d.innerHTML="Woopsiee..Wrong!";
    d.classList.add("add1");
    c[0].appendChild(d);

}


//  Question 5


function goGreen5() {
    let a = document.getElementsByClassName("correct5")[0];
    a.remove();
    
    let b = document.getElementsByClassName("inc5");
    i = 0;
    while(b.length != 0) {
        b[i].remove();
    }
    let c = document.getElementsByClassName("q5");


    let d = document.createElement('span');
    d.innerHTML="Yohoo..Correct!";
    d.classList.add("add");
    c[0].appendChild(d);
    num++;
    check();
}



function goRed5() {
    let a = document.getElementsByClassName("correct5")[0];
    a.remove();
    
    let b = document.getElementsByClassName("inc5");
    i = 0;
    while(b.length != 0) {
        b[i].remove();
    }
    let c = document.getElementsByClassName("q5");
    let d = document.createElement('span');
    d.innerHTML="Woopsiee..Wrong!";
    d.classList.add("add1");
    c[0].appendChild(d);
    check();
}

function check() {
    if(num >= 3) 
    alert("Congratulations! you made it to Genin level");

    else {
        alert("Give it another try! You'll get there.");
    }

}



