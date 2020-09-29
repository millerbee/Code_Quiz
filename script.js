//var totalQuestions = 10;
//var currentQuestion  = 0;
var startButton = document.getElementById("start-btn")
var questionContainerElement= document.getElementById("question-container")
var submitBtn = document.querySelector("next-btn")
var saveBtn = document.querySelector(".save")
var currentQuestionArr
var questionsElement = document.getElementById("question")
var answersElement = document.getElementById("answer-btns")



function startQuiz() {
    console.log('started')
    startButton.classList.add("hide")
    currentQuestionArr = 0
    questionContainerElement.classList.remove("hide")
    getNextQuestion()
}

function getNextQuestion() {
    showQuestion([currentQuestionArr])
   }
   

function displayQuestion(question) {
    questionElement.innerText=question.question
}

var questions =[
    {
        question: "JavaScript is",
        answers: [
            { text: "a text-based programming language", correct: true},
            { text: "used to style web pages", correct: false},
            { text: "used to program your coffee pot", correct: false},
            { text: "a script used in the Roman Empire", correct: false}
            ]

    }
]






//ask first question








function selectAnswer(){

}

startButton.addEventListener("click", startQuiz)

// function - if correct again, ask another




//function Game is over, present score




//when over, allow user to save initals and score