//questions from w3schools.com
var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      options: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "Arrays are noted by:",
      options: ["square brackets []", "curly {}", "parentheses()", "pipes ||" ],
      answer: "square brackets []"
    },
    {
      title: "Inside which HTML element do we put the JavaScript?",
      options: ["<javascript>", "<scriptor>", "<js>", "<script>"],
      answer: "<script>"
    },
    {
      title: "Which of these in not a logical operator?",
      options: [" ! ", " & ", " || ", " && "],
      answer: " & "
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
      options: ["if i = 6 or else", "if i = 6 then", "if i == 6 then", "if(i == 6)"],
      answer: "if(i == 6)"
    },
    {
      title: "How does a “while” loop start?",
      options: ["while i=(1 <> 10)", "while (i <= 10)", "while i=1 to 10", "while (i <=10; i++)"],
      answer: "while (i <= 10)"
    }
  ]
//setting up the variables
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
var answerButton  = document.querySelector(".answerButton");
var currentQuestionArr = 0;
var userAnswer = "";
var gameOver = document.getElementById("gameOver");
var message = document.getElementById("result");
var getScore = document.getElementById("submit-btn");
var finalScore = document.getElementById("yourScore");

// start the process
startButton.addEventListener("click", startQuiz);   

//start the quiz card and hid the start button and title, then call start clock and display question functions
function startQuiz() {

    startButton.classList.add("hide")
    document.getElementsByTagName('h1')[0].style.display ="none";
    questionContainerElement.classList.remove("hide")
    startClock() 
    displayQuestion()
}

// start the clock when the question card loads and when time runs out let the user know and return their score.
function startClock() {
    var timeInterval = setInterval(function () {
        timeLeft--;
        timer.textContent = "Timer: " + timeLeft;

        if (timeLeft === 0) {   //there is a bug here, if user at 9 seconds and 10 are taken away from incorrect question. also when alert pops up you'll see the timer at 1 instead of 0
            clearInterval(timeInterval),
            alert("Game over! You ran out of time!")
            lastQuestion();
        }

        else if (currentQuestionArr === questions.length) {
            clearInterval(timeInterval);
            quizOver();
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
       // answerButton.addEventListener("click", selectAnswer)
        //checkAnswer();
}

//check the users answer against the correct answer - I wanted one section to loop through instead of each button but I kept getting errors. still working on it...
document.getElementById("btnA").addEventListener("click", function() {
       if (questions[currentQuestionArr]["options"][0] ===questions[currentQuestionArr]["answer"]) {
            message.textContent ="Correct!";
            score++;
    }
    else {
        message.textContent ="Wrong!"
        timeLeft -= 10;
    }
    currentQuestionArr++;
    displayQuestion();
  })

//if the answer is correc the score will increment
  document.getElementById("btnB").addEventListener("click", function()  {
    if (questions[currentQuestionArr]["options"][1] ===questions[currentQuestionArr]["answer"]) {
         message.textContent ="Correct!";
         score++;
 }
    else {
     message.textContent ="Wrong!"
     timeLeft -= 10;
 }
 currentQuestionArr++;
 displayQuestion();
})
// here I set whether an answer is correct or not
document.getElementById("btnC").addEventListener("click", function() {
  if (questions[currentQuestionArr]["options"][2] ===questions[currentQuestionArr]["answer"]) {
       message.textContent ="Correct!";
       score++;
}
else {
   message.textContent ="Wrong!"
   timeLeft -= 10;
}
currentQuestionArr++;
displayQuestion();
})

document.getElementById("btnD").addEventListener("click", function() {
if (questions[currentQuestionArr]["options"][3] ===questions[currentQuestionArr]["answer"]) {
  message.textContent ="Correct!";
  score++;
}
else {
message.textContent ="Wrong!"
timeLeft -= 10;
}
currentQuestionArr++;
displayQuestion();
})

// this will display the get score button and return the score and allow the user to enter their intials to save as a highscore
function quizOver()  {
  // for( let element of document.getElementsByClassName(".btn-group")){
  //   element.style.display="none";
      
 // document.getElementById("submit-btn").style.display = "block";
    
    var yourTime =parseInt(timeLeft);
    timeLeft = yourTime;
    var yourScore = score;
    yourTime = yourTime - 60; 
   // percent = yourScore * .100;
    //npercent = percent.toFixed();
    finalScore.textContent="Your score: " + yourScore;

}








