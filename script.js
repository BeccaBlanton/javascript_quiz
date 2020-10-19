/*
Code Quiz
Quiz starts when pressing a button
button starts a timer 
first question appears on screen
question contains text and multiple buttons for multiple choice
once one button is pressed page refreshes to next question
if wrong button is pressed, then time will be subtracted from total
after set amount of questions or timer goes off which ever comes first
end quiz if either occur
give end game statement
form that allows to enter intials
initials and score posted onto page
*/
//Starting elements to pull from HTML for main elements and timer function
var startBtn = document.getElementById('start')
var quiz = document.getElementById('quiz');
var results = document.getElementById('results');
var submitBtn = document.getElementById('submit');
var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");
//Timer Variables
var totalSeconds = 300;
var secondsElapsed = 0;
var interval;
console.log(totalSeconds)
console.log(secondsElapsed)
//Timer to start when user clicks Start for the quiz
function startTimer() {
    if (totalSeconds > 0) {
        interval = setInterval(function() {
          secondsElapsed++;
          renderTime();
          console.log(renderTime)
        }, 1000);
    } 
  }
  function renderTime() {
    // When renderTime is called it sets the textContent for the timer html...
    minutesDisplay.textContent = getFormattedMinutes();
    secondsDisplay.textContent = getFormattedSeconds();
    if (secondsElapsed >= totalSeconds) {
       alert("Time's Up!")
        stopTimer();
      }
    }
    function getFormattedMinutes() {
        var secondsLeft = totalSeconds - secondsElapsed;
        var minutesLeft = Math.floor(secondsLeft / 60);
        var formattedMinutes;
        if (minutesLeft < 10) {
          formattedMinutes = "0" + minutesLeft;
        } else {
          formattedMinutes = minutesLeft;
        }
        console.log(secondsLeft)
    console.log(minutesLeft)
        return formattedMinutes;
      }
    function getFormattedSeconds() {
        var secondsLeft = (totalSeconds - secondsElapsed) % 60;
        var formattedSeconds;
        if (secondsLeft < 10) {
          formattedSeconds = "0" + secondsLeft;
        } else {
          formattedSeconds = secondsLeft;
        }
        return formattedSeconds;
      }

startBtn.addEventListener("click", startTimer);

//Array of objects for quiz questions
var questions = [{
    question: "1.What operator is used to assign a value to a Variable?",
    choices: ["x", "-", "=", "==="],
    correctAnswer: 2
}, {
    question: "2. What does DOM stand for?",
    choices: ["Document object Model", "Document object Media", "Direct object Model", "Document operating Media"],
    correctAnswer: 0
}, {
    question: "3. Which event can be used when the user pushes a keyboard key?",
    choices: ["onkeypress", "onkeydown", "onpushkey", "keyover"],
    correctAnswer: 1
}, {
    question: "4. How can you comment out more than one line?",
    choices: ["!//comment//", "/*comment*/", "//comment//", "<!--comment-->"],
    correctAnswer: 1
}, {
    question: "5. Which HTML element do you put in Javascript?",
    choices: ["<js>", "<javascript>", "<script>", "<jscript>"],
    correctAnswer: 2
},{
	question: "6. Which functions would you use to add an element at the beginning of an array and one at the end?",
    choices: ["push,unshift", "unshift,push", "first,push", "unshift,last"],
    correctAnswer: 1
}];

