/*
Code Quiz
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

var startBtn = document.getElementById('startBtn')
var submitBtn = document.getElementById('submitBtn');
var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");
//GLOBALS
const currentQuestion =''
const score = 0
//press start and quiz begins and time starts
startBtn.addEventListener('click', initQuiz)
startBtn.addEventListener('click', startTimer)
//Timer Variables
var totalSeconds = 300;
var secondsElapsed = 0;
var interval;
//Timer to start when user clicks Start for the quiz
function startTimer() {
    if (totalSeconds > 0) {
        interval = setInterval(function() {
          secondsElapsed++;
          renderTime();
        }, 1000);
    } 
  }
  function renderTime() {
    // When renderTime is called it sets the textContent for the timer html...
    minutesDisplay.textContent = getFormattedMinutes();
    secondsDisplay.textContent = getFormattedSeconds();
    if (secondsElapsed >= totalSeconds) {
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


//array of questions, choices and answers
var questionArr={
    questions: [
        {
          question: "What operator is used to assign a value to a Variable?",
          choices: [" x ", " - ", " = ", " === "],
          correctAnswer: 3
      }, {
          question: "What does DOM stand for?",
          choices: [" Document object Model ", " Document object Media ", " Direct object Model ", " Document operating Media "],
          correctAnswer: 1
      },{
          question: "Which event can be used when the user pushes a keyboard key?",
          choices: [" onkeypress ", " onkeydown ", " onpushkey ", " keyover "],
          correctAnswer: 2
      }, {
          question: "How can you comment out more than one line?",
          choices: [" !//comment// ", " /*comment*/ ", " //comment// "," <!--comment--> "],
          correctAnswer: 2
      }, {
          question: "What will this output? var a = [1, 2, 3]; console.log(a[6]);?",
          choices: [" unknown string ", " syntax error ", " undefined ", " 0 "],
          correctAnswer: 3
      },{
          question: "Which functions would you use to add an element at the beginning of an array and one at the end?",
          choices: [" push,unshift ", " unshift,push ", " first,push ", " unshift,last "],
          correctAnswer: 2
      }
      ],
    }



//function for start of quiz
function initQuiz(){
//init globals
currentQuestion = 0
starttimer()
loadNextQuestion()
}
    function timer(){
console.log(timer.started)
    }
//first question appears on screen with multiple buttons
//if correct, get one point
//else incorrect answer. and time deducted from timer
function checkAnswers(){
if() 
    currentQuestion++

else()
loadNextQuestion(currentQuestion)
}

//press any option and next question loads

function loadNextQuestion(currentQuestionIndex){
    console.log(questions[currentQuestionIndex])
//load up question
//continue until all questions
//end quiz when time runs out or al questions are answered
}
//continue until all questions
//end quiz when time runs out or al questions are answered
function saveData(){
//give out alert end message
//form pops up to fill in initials and put in score
//score loads onto page.
}


//Ui logic
//attach event listeners to all the options


//button for init game
document.querySelector('#start').addEventListener('click', initQuiz)

function(e){
    if(e.target.classlist.contains('option')){
        return
    }
    //do the thing
}
//button for each answer, runs check answer

