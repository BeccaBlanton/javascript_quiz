
/*if wrong button is pressed, then time will be subtracted from total
form that allows to enter intials
initials and score posted onto page
*/
//All Global Variables getting element from HTML
var main = document.querySelector("main")
var startBtn = document.getElementById('startBtn')
var submitBtn = document.getElementById('submitBtn');
var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");
var quizBox= document.querySelector('.quizbox')
var scoreForm= document.querySelector("#scoreform")
var quizQuestion = document.querySelector("#quizquestion")
var choice1 = document.querySelector("#btn1")
var choice2 = document.querySelector("#btn2")
var choice3 = document.querySelector("#btn3")
var choice4 = document.querySelector("#btn4")
var i = 0
var score = 0
//Timer Variables
var totalSeconds = 180;
var secondsElapsed = 0;
var interval;

//array of questions, choices and answers for Quiz
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
//init globals: Timer starts with first function called and First question appears with 2nd function
startTimer()
loadQuestion()
main.setAttribute("style", "display:block")
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
// When renderTime is called it sets the textContent for the timer html...
function renderTime() {
  minutesDisplay.textContent = getFormattedMinutes();
  secondsDisplay.textContent = getFormattedSeconds();
  if (secondsElapsed >= totalSeconds) {
      stopTimer();
    }
  }
  //formatting to appear on page as minutes and seconds
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
//clears once reaches 0, submit button pressed or all questions are answered
    function stopTimer(){
      clearInterval(interval)
      secondsElapsed = 0;
    renderTime();
    }

//Start of Quiz functions loads questions and choices from array to quiz box
function loadQuestion(){
  console.log(i)
    quizQuestion.textContent = questionArr[i].question;
    choice1.textContent = questionArr[i].choices[0]
    choice2.textContent = questionArr[i].choices[1]
    choice3.textContent = questionArr[i].choices[2]
    choice4.textContent = questionArr[i].choices[3]
  }

//function runs after one of choices buttons is clicked, then moves to next question
//time not subtracting if wrong(need to fix)
function checkAnswers(event){
  console.log(i)
   var selection = event.target
   if(selection.matches('.btn-primary')){
       var selectedItem = selection.id
       console.log(selectedItem)
       //checks if btn pressed matches correctAnswer in array
       if(selectedItem === questionArr[i].correctAnswer){
       score++}
      console.log(score)
   } //if clicked other btn, will deduct time
       else{
           totalSeconds - 30
           console.log(totalSeconds)
       }
       if(i < 5){
        loadQuestion()
       } else {
         saveData()
       }
       //increments i to load the next question in loadQuestion function
       i++
  }
 //once submit button is pressed or last question answered Alerts Score
function saveData(){
  alert("Thanks for playing!! you got " + score +" out of 6 correct");
  stopTimer();
  //removes questions from screen
  quizBox.remove()
  //hides submit button
  submitBtn.setAttribute("style", "display: none")

  //to load an input form to enter name, then enter score
  var initialsForm = document.createElement("input");
  scoreForm.append(initialsForm)
  initialsForm.setAttribute('type', "text")
  initialsForm.setAttribute('placeholder', "name")
  var addNameBtn = document.createElement("button")
  addNameBtn.setAttribute('id',"addbtn")
  addNameBtn.textContent = "Add Initials"
  var finalScore = document.createElement('p');
  scoreForm.appendChild(finalScore)
  finalScore.textContent = score

}
//event listeners for all the buttons
document.querySelector('#startBtn').addEventListener('click', initQuiz)
document.querySelector('#submitBtn').addEventListener('click', saveData)
document.querySelector('#btn1').addEventListener('click', checkAnswers)
document.querySelector('#btn2').addEventListener('click', checkAnswers)
document.querySelector('#btn3').addEventListener('click', checkAnswers)
document.querySelector('#btn4').addEventListener('click', checkAnswers)

