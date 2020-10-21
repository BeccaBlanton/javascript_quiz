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
//Starting elements to pull from HTML for main elements and timer function
var startBtn = document.getElementById('startBtn')
var quiz = document.getElementById('quiz');
var results = document.getElementById('results');
var submitBtn = document.getElementById('submitBtn');
var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");
var output =[];

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
var quizQuestions = [
  {
    question: "1.What operator is used to assign a value to a Variable?",
    choices: {
      a: "x", 
      b: "-", 
      c:"=", 
      d:"==="
    },
    correctAnswer: "c"
}, {
    question: "2. What does DOM stand for?",
    choices: {
      a: "Document object Model", 
      b: "Document object Media", 
      c: "Direct object Model", 
      d:"Document operating Media"
    },
    correctAnswer: "a"
},{
    question: "3. Which event can be used when the user pushes a keyboard key?",
    choices: {
      a:"onkeypress", 
      b: "onkeydown", 
      c: "onpushkey", 
      d: "keyover",
    },
    correctAnswer: "b"
}, {
    question: "4. How can you comment out more than one line?",
    choices: {
      a: "!//comment//", 
      b: "/*comment*/", 
      c: "//comment//", 
      d:"<!--comment-->",
    },
    correctAnswer: "b"
}, {
    question: "5. Which HTML element do you put in Javascript?",
    choices: {
      a: "<js>", 
      b: "<javascript>", 
      c: "<script>", 
      d: "<jscript>",
    },
    correctAnswer: "c"
},{
	question: "6. Which functions would you use to add an element at the beginning of an array and one at the end?",
    choices: {
      a: "push,unshift", 
      b: "unshift,push", 
      c: "first,push", 
      d: "unshift,last",
    },
    correctAnswer: "b"
}];

//start functions to show quiz on page
function mainQuiz(){
  quizQuestions.forEach( (curQuestion, questionNum)=>{
  var choices = [];
  for(letter in curQuestion.choices){
    choices.push(
      `<label>
      <input type="radio" name="question${questionNum}" value="${letter}">
      ${letter} :
      ${curQuestion.choices[letter]}
      </label>`
    );
  }
  output.push(
    `<div class="question"> ${curQuestion.question}</div>
    <div class="choices"> ${choices.join('')}</div>`
  )
}
)
quiz.innerHTML = output.join('');
}


//results function. pull correct answer from correct answer section in array.
function results(){

var quizAnswers = quiz.querySelectorAll('.answers')
var numCorrect = 0;

quizQuestions.forEach( (curQuestion,questionNum) => {
  var eachAnswer = quizAnswers[questionNum];
  var selector = `input[name=question${questionNum}]:checked`;
  var answerPicked = (eachAnswer.querySelector(selector)|| {}).value;

  if(answerPicked === curQuestion.correctAnswer){
    numCorrect++;

  }

});

results.innerHTML = `${numCorrect} out of ${quizQuestions.length}`;
}

mainQuiz()


submitBtn.addEventListener('click', results);

