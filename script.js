

function myNumber() {
    var num = Math.floor(Math.random() * 10 + 1);
    let myInput = document.querySelector("input").value;



    if (num < myInput) {
        document.querySelector("p").innerHTML = "Too Small";


    } else {
        if (num > myInput) {
            document.querySelector("p").innerHTML = "Too large";

        }else  {
            document.querySelector("p").innerHTML = "Waaoo!! you got";


        }
    }
}