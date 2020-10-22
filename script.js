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
var submitBtn = document.getElementById('submitBtn');
var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");

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

startBtn.addEventListener("click", startTimer);



var ul = document.getElementById('ul')
var nextButton = document.getElementById('btnNext');
var quizbox = document.getElementById('questionBox')
var opt1 = document.getElementById('opt1')
var opt2 = document.getElementById('opt2')
var opt3 = document.getElementById('opt3')
var opt4 = document.getElementById('opt4')

var app={
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
        index:0,
        load:function(){
            if(this.index<=this.questions.length-1){
                quizbox.innerHTML=this.index+1 + ". " +this.questions[this.index].question;
                opt1.innerHTML=this.questions[this.index].choices[0];
                opt2.innerHTML=this.questions[this.index].choices[1];
                opt3.innerHTML=this.questions[this.index].choices[2];
                opt4.innerHTML=this.questions[this.index].choices[3];
            }
            else {
                quizbox.innerHTML="Quiz Completed!";
                ul.style.display="none";
                nextButton.style.display="none";
            }
        },
        next: function(){
            this.index++;
            this.load();
        },
        check: function(ele){
            var id=ele.id.split('');
            if(id[id.length-1]==this.questions[this.index].correctAnswer){
                this.score++;
                ele.className="correct";
                this.scoreCard();
            }
            else{
                ele.className="wrong";
            }
        },
        preventClick:function(){
            for(let i=0; i<ul.children.length; i++){
                ul.children[i].style.pointerEvents="none";
            }
        },
        allowClick:function(){
            for(let i=0; i<ul.children.length; i++){
                ul.children[i].style.pointerEvents="auto";
                ul.children[i].className=''
            }
        },
        score:0,
        scoreCard:function(){
            scoreCard.innerHTML= this.score + "/" + this.questions.length;
        }
}

window.load=app.load();

function button(ele){
    app.check(ele);
    app.preventClick();
}

function next(){
    app.next();
    app.allowClick();
}

