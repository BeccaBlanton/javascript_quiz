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
var quizBox= document.querySelector('.quizbox')
var results= document.querySelector(".resultsbox")
//GLOBALS
var currentQuestion =''
var score = 0


//Timer Variables
var totalSeconds = 300;
var secondsElapsed = 0;
var interval;

//array of questions, choices and answers

    var questionArr=[
        {
          question: "What operator is used to assign a value to a Variable?",
          choices: [" x ", " - ", " = ", " === "],
          correctAnswer: "btn3"
      }, {
          question: "What does DOM stand for?",
          choices: [" Document object Model ", " Document object Media ", " Direct object Model ", " Document operating Media "],
          correctAnswer: "btn1"
      },{
          question: "Which event can be used when the user pushes a keyboard key?",
          choices: [" onkeypress ", " onkeydown ", " onpushkey ", " keyover "],
          correctAnswer: "btn2"
      }, {
          question: "How can you comment out more than one line?",
          choices: [" !//comment// ", " /*comment*/ ", " //comment// "," <!--comment--> "],
          correctAnswer: "btn2"
      }, {
          question: "What will this output? var a = [1, 2, 3]; console.log(a[6]);?",
          choices: [" unknown string ", " syntax error ", " undefined ", " 0 "],
          correctAnswer: "btn3"
      },{
          question: "Which functions would you use to add an element at the beginning of an array and one at the end?",
          choices: [" push,unshift ", " unshift,push ", " first,push ", " unshift,last "],
          correctAnswer: "btn2"
      }
      ]

//press start and quiz begins and time starts
startBtn.addEventListener('click', initQuiz)

//function for start of quiz
function initQuiz(){
//init globals
currentQuestion = 0
startTimer()
loadNextQuestion()
}


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

    function stopTimer(){
      clearInterval(interval)
      secondsElapsed = 0;
    renderTime();
    }

//function runs after one of choices buttons is clicked, then moves to next question
//time not subtracting if wrong
function checkAnswers(){
   var selection = event.target
   if(selection.matches('.btn-primary')){
       var selectedItem = selection.id
       console.log(selectedItem)
       //checks if btn pressed matches correctAnswer in array
       if(selectedItem === questionArr[currentQuestion].correctAnswer){
       score++}
      console.log(score)
   } //if clicked other btn, will deduct time
       else{
           totalSeconds=totalSeconds - 30
       }
  loadNextQuestion()
  }
//press any option and next question loads
//currently loads all questions
function loadNextQuestion(){
  var i=0
    var currentQuestion = document.createElement("ol")
    currentQuestion.textContent = questionArr[i].question;
    quizBox.appendChild(currentQuestion)
    var choice1 = document.createElement("li")
    var choice2 = document.createElement("li")
    var choice3 = document.createElement("li")
    var choice4 = document.createElement("li")
    choice1.textContent = questionArr[i].choices[0]
    choice2.textContent = questionArr[i].choices[1]
    choice3.textContent = questionArr[i].choices[2]
    choice4.textContent = questionArr[i].choices[3]
    currentQuestion.appendChild(choice1);
    currentQuestion.appendChild(choice2);
    currentQuestion.appendChild(choice3);
    currentQuestion.appendChild(choice4);
    choice1.setAttribute("class", "btn btn-primary")
    choice1.setAttribute("id", "btn1")
    choice2.setAttribute("class", "btn btn-primary")
    choice2.setAttribute("id", "btn2")
    choice3.setAttribute("class", "btn btn-primary")
    choice3.setAttribute("id", "btn3")
    choice4.setAttribute("class", "btn btn-primary")
    choice4.setAttribute("id", "btn4")
    document.querySelector('#btn1').onclick = checkAnswers
    document.querySelector('#btn2').onclick = checkAnswers
    document.querySelector('#btn3').onclick = checkAnswers
    document.querySelector('#btn4').onclick = checkAnswers

    console.log(currentQuestion)
  }
//end quiz when time runs out or al questions are answered
function saveData(){
  alert("Thanks for playing!! you got " + score +" out of 6 correct");
  stopTimer();
  //removes questions from screen
  quizBox.remove()
  //to load an input form to enter name, then enter score
  var initialsForm = document.createElement("input");
  results.append(initialsForm)
  initialsForm.setAttribute('type', "text")
  initialsForm.setAttribute('placeholder', "name")
  var finalScore = document.createElement('p');
  results.appendChild(finalScore)
  finalScore.textContent = score
}
//Ui logic
//attach event listeners to all the options
//button for init game and then to submit and saveData
document.querySelector('#startBtn').addEventListener('click', initQuiz)
document.querySelector('#submitBtn').addEventListener('click', saveData)

