
// for easy level
var num = Math.floor(Math.random() * 10);

function myNumber() {
    let myInput = parseInt(document.querySelector("#userInput").value);



    if (num > myInput) {
        document.querySelector("p").innerHTML = " Too small";


    } else {
        if (num < myInput) {
            document.querySelector("p").innerHTML = "Too large";

        }else if(num == myInput) {
            document.querySelector("p").innerHTML = "Waaoo!! you got";


        }
    }
}

// // // for medium level


// function myNumber() {
//     var num = Math.floor(Math.random() * 100);
//     let myInput = document.querySelector("input").value;



//     if (num < myInput) {
//         document.querySelector("p").innerHTML = "Too Small";


//     } else {
//         if (num > myInput) {
//             document.querySelector("p").innerHTML = "Too large";

//         }else  {
//             document.querySelector("p").innerHTML = "Waaoo!! you got";


//         }
//     }
// }

// // // for hard level

// function myNumber() {
//     var num = Math.floor(Math.random() * 400);
//     let myInput = document.querySelector("input").value;



//     if (num < myInput) {
//         document.querySelector("p").innerHTML = "Too Small";


//     } else {
//         if (num > myInput) {
//             document.querySelector("p").innerHTML = "Too large";

//         }else  {
//             document.querySelector("p").innerHTML = "Waaoo!! you got";


//         }
//     }
// }