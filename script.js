
var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      options: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "Inside which HTML element do we put the JavaScript?",
      options: ["<javascript>", "<scriptor>", "<js>", "<script>"],
      answer: "<js>"
    },
    {
      title: "Where should you insert JavaScript?",
      options: ["the <head>", "the bottom of the <body>", "anywhere in the HTML", "anywhere in the stylesheet"],
      answer: "the bottom of the <body>"
    },
    {
      title: "How do you write 'Hello World' in an alert box?",
      options: ["msgBox('Hello World)", "alertBox('Hello World')", "alert('Hello World')", "msg('Hello World)"],
      answer: "alert('Hello World')"
    },
    {
      title: "How do you call a function called myFunction?",
      options: ["myFunction()", "call myFunction()", "call function myFunction", "call select myFunction"],
      answer: "myFunction()"
    },
    {
      title: "How do you write an IF statement in JavaScript?",
      options: ["if i = 5 or else", "if i = 5 then", "if i == 5 then", "if(i == 5)"],
      answer: "if(i == 5)"
    },
    {
      title: "How does a while loop start?",
      options: ["while i between 0 and 10", "while (i <= 10; i++)", "while (i <= 10)", "while i <= 10"],
      answer: "while (i <= 10)"
    }
  ]

var score =0;
var timeLeft = 60;
var startButton = document.getElementById("start-btn")
var questionContainerElement= document.getElementById("question-container")
var questionElement = document.getElementById("question")
var answerA = document.getElementById("btnA");
var answerB = document.getElementById("btnB");
var answerC = document.getElementById("btnC");
var answerD = document.getElementById("btnD");
var timer = document.getElementById("timer");
var currentQuestionArr = 0;

// start the process
startButton.addEventListener("click", startQuiz);   

//start the quiz display and hid the start button and title, then call start clock and display question functions
function startQuiz() {

    startButton.classList.add("hide")
    document.getElementsByTagName('h1')[0].style.display ="none";
    questionContainerElement.classList.remove("hide")
    startClock() 
    displayQuestion()
}

function startClock() {
    var timeInterval = setInterval(function () {
        timeLeft--;
        timer.textContent = "Timer: " + timeLeft;

        if (timeLeft === 0) {
            clearInterval(timeInterval),
            alert("Game over! You ran out of time!")
            lastQuestion();
        }

        else if (currentQuestionArr === questions.length) {
            clearInterval(timeInterval);
        }
    },  1000)
    return (score)
           
}


function displayQuestion() {
    if (currentQuestionArr === questions.length) {
        quizOver();
    }
    else{
        questionElement.textContent= questions[currentQuestionArr]["title"];
        answerA.textContent = questions[currentQuestionArr]["options"][0];
        answerB.textContent = questions[currentQuestionArr]["options"][1];
        answerC.textContent = questions[currentQuestionArr]["options"][2];
        answerD.textContent = questions[currentQuestionArr]["options"][3];
    }
}










