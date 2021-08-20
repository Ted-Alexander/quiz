// const { writer } = require("repl");

var imgEl = document.querySelectorAll("img");
var quizCount = 0;
var timer;
var playerScore
var startScreen = document.querySelector("#start-screen")
var quizScreen = document.querySelector("#questions")
var endScreen = document.querySelector("#end-screen")
var startBtn = document.querySelector("#start-button")
var button1 = document.querySelector("#choice1")
var button2 = document.querySelector("#choice2")
var button3 = document.querySelector("#choice3")

startBtn.addEventListener("click", function() {
    console.log("quiz started!");
    startScreen.setAttribute("class", "hide");
    quizScreen.setAttribute("class", "start");
    quizCount++;
    buttonWriter();
    timer = 60
    setInterval(quizTimer, 1000);
});

function quizTimer() {
    timer--;
    document.querySelector('#timer').textContent = `Time: ${timer}`;
}



button1.addEventListener("click", function() {
    if (quizCount === 1 || quizCount === 3 || quizCount === 4 || quizCount === 7){
        console.log("Correct!");
        quizCount++ 
        buttonWriter();
    }
     else {
        console.log("Inorrect.");
        timer -= 10
        quizCount++ 
        buttonWriter();
    }
     })

button2.addEventListener("click", function() {
    if (quizCount === 5 || quizCount === 8 || quizCount === 10){
        console.log("Correct!");
        quizCount++ 
        buttonWriter();
    }
     else {
        console.log("Inorrect.");
        timer -= 10
        quizCount++ 
        buttonWriter();
    }
     })

button3.addEventListener("click", function() {
    if (quizCount === 2 || quizCount === 6 || quizCount === 9){
        console.log("Correct!");
        quizCount++ ;
        buttonWriter();
    }
     else {
        console.log("Inorrect.");
        timer -= 10;
        quizCount++ ;
        buttonWriter();
    }
     })


function buttonWriter() {
    if (quizCount === 1) {
imgEl[0].setAttribute("src", "assets/images/russia.png");
document.querySelector('#choice1').textContent = 'russia';
document.querySelector('#choice2').textContent = "france";
document.querySelector('#choice3').textContent = "poland";
    }

else if (quizCount === 2) {
    imgEl[0].setAttribute("src", "assets/images/greece.png");
    document.querySelector('#choice1').textContent = "estonia"
    document.querySelector('#choice2').textContent = "sweden"
    document.querySelector('#choice3').textContent = "greece"
    }
 else if (quizCount === 3){
    imgEl[0].setAttribute("src", "assets/images/italy.png");
    document.querySelector('#choice1').textContent = "italy"
    document.querySelector('#choice2').textContent = "mexico"
    document.querySelector('#choice3').textContent = "ireland"
        }
else if (quizCount === 4){
    imgEl[0].setAttribute("src", "assets/images/NZ.png");
    document.querySelector('#choice1').textContent = "New Zealand"
    document.querySelector('#choice2').textContent = "Australia"
    document.querySelector('#choice3').textContent = "United Kigdom"
     }
 else if (quizCount === 5){
    imgEl[0].setAttribute("src", "assets/images/sweden.png");
    document.querySelector('#choice1').textContent = "estonia"
    document.querySelector('#choice2').textContent = "sweden"
    document.querySelector('#choice3').textContent = "greece"
        }
    else if (quizCount === 6){
    imgEl[0].setAttribute("src", "assets/images/wales.png");
    document.querySelector('#choice1').textContent = "lithuania"
    document.querySelector('#choice2').textContent = "denmark"
    document.querySelector('#choice3').textContent = "wales"
    }
    else if (quizCount === 7){
    imgEl[0].setAttribute("src", "assets/images/switzerland.png");
    document.querySelector('#choice1').textContent = "Switzerland"
    document.querySelector('#choice2').textContent = "Swissland"
    document.querySelector('#choice3').textContent = "Luxemburg"
    }
    else if (quizCount === 8){
    imgEl[0].setAttribute("src", "assets/images/China.png");
    document.querySelector('#choice1').textContent = "Vietnam"
    document.querySelector('#choice2').textContent = "China"
    document.querySelector('#choice3').textContent = "India"
    }
    else if (quizCount === 9){
    imgEl[0].setAttribute("src", "assets/images/USA.png");
    document.querySelector('#choice1').textContent = "United Arab Emerates"
    document.querySelector('#choice2').textContent = "Untied Shoe Laces"
    document.querySelector('#choice3').textContent = "United States of America"
    }
    else if (quizCount === 10){
    imgEl[0].setAttribute("src", "assets/images/Colombia.png");
    document.querySelector('#choice1').textContent = "Japan"
    document.querySelector('#choice2').textContent = "Colombia"
    document.querySelector('#choice3').textContent = "Ohio"
}
}
