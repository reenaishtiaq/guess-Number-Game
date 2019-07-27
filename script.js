
let numEasy = parseInt(Math.random() * 10);
let numMedium = parseInt(Math.random() * 100);
let numHard = parseInt(Math.random() * 500);

document.querySelector("#easy").style = "display: none;";
document.querySelector("#medium").style = "display: none;";
document.querySelector("#hard").style = "display: none;";
document.querySelector("#user").style = "display: none;";

// for easy level page 
function easy() {
    document.querySelector("#easy").style = "display: flex;";
    document.querySelector("#medium").style = "display: none;";
    document.querySelector("#hard").style = "display: none;";
    document.querySelector("#user").style = "display: flex;";
}

// for medium level page
function medium() {
    document.querySelector("#easy").style = "display: none;";
    document.querySelector("#medium").style = "display: flex;";
    document.querySelector("#hard").style = "display: none;";
    document.querySelector("#user").style = "display: flex;";
}

// for hard level page
function hard() {
    document.querySelector("#easy").style = "display: none;";
    document.querySelector("#medium").style = "display: none;";
    document.querySelector("#hard").style = "display: flex;";
    document.querySelector("#user").style = "display: flex;";
}

// Easy level

function displayResult() {

    let myInput = document.querySelector(".userinput").value;

    if (myInput == "") {
        alert("please enter a number")
    } else {
        if (myInput < numEasy) {
            alert("too small");
        } else if (myInput > numEasy) {
            alert("too large");
        } else if (myInput == numEasy) {
            alert("congratulate");
        }
    }
}
// medium level
function displayResult() {
    let myInput = document.querySelector(".userinput").value;

    if (myInput == "") {
        alert("please enter a number")
    } else {
        if (numMedium > myInput) {
            alert("too small");
        } else if (numMedium < myInput) {
            alert("too large");
        } else if (numMedium == myInput) {
            alert("congratulate");

        }

    }
}
// hard levl
function displayResult() {
    let myInput = document.querySelector(".userinput").value;

    if (myInput == "") {
        alert("please enter a number")
    } else {
        if (numHard > myInput) {
            alert("too small");
        } else if (numHard < myInput) {
            alert("too large");
        } else if (numHard == myInput) {
            alert("congratulate");

        }

    }
}