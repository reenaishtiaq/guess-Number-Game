

document.querySelector("#easy").style = "display: none;";
document.querySelector("#medium").style = "display: none;";
document.querySelector("#hard").style = "display: none;";
document.querySelector("#user").style = "display: none;";

let num;
let attempt = 0;

// for easy level page 
function easy() {
    num = parseInt(Math.random() * 10);
    
    document.body.style.backgroundImage = "url('images/easy2.jpg')";
    document.querySelector("#easy").style = "display: flex;";
    document.querySelector("#medium").style = "display: none;";
    document.querySelector("#hard").style = "display: none;";
    document.querySelector("#user").style = "display: flex;";
}

// for medium level page
function medium() {
    num = parseInt(Math.random() * 100);
    
    document.body.style.backgroundImage = "url('images/medium1.jpg')";
    document.querySelector("#easy").style = "display: none;";
    document.querySelector("#medium").style = "display: flex;";
    document.querySelector("#hard").style = "display: none;";
    document.querySelector("#user").style = "display: flex;";
}

// for hard level page
function hard() {
    num = parseInt(Math.random() * 500);
    
    document.body.style.backgroundImage = "url('images/hard2.jpg')";
    document.querySelector("#easy").style = "display: none;";
    document.querySelector("#medium").style = "display: none;";
    document.querySelector("#hard").style = "display: flex;";
    document.querySelector("#user").style = "display: flex;";
}

function displayResult() {
    attempt++
    
    let myInput = document.querySelector(".userinput").value;

    if (attempt < 10) {
        if (myInput == "") {
            alert("please enter a number")
        } else {
            if (myInput < num) {
                alert("Too low! Guess again!");
            } else if (myInput > num) {
                alert("Too high! Guess again!");
            } else if (myInput == num) {
                alert("Congratulations!! You got me in " + attempt + " attempts." + " I was thinking " + num); 
            }
        }
    } else {
        alert("You Lost! Please try again")
    }
}