var timerEl = document.getElementById("timer");
var startBtn = document.getElementById("startBtn");
var option1Btn = document.getElementById("option1");
var option2Btn = document.getElementById("option2");
var option3Btn = document.getElementById("option3");
var option4Btn = document.getElementById("option4");
var questionEl = document.getElementById("question");
var highscoreBtn = document.getElementById("highscoreBtn");
var welcomeEl = document.getElementById("welcome-page");
var quizEl = document.getElementById("quiz-page");
var highscoreEl = document.getElementById("highscore-page");
var timer = 60;

var questionsArray = [
    {
        question: "Which of the following asks the user for a text input?",
        option1: "alert()",
        option2: "confirm()",
        option3: "prompt()",
        option4: "input()",
        answer: "prompt()"
    },
    {
        question: "Which of the following asks the user for an input?",
        option1: "alert()",
        option2: "confirm()",
        option3: "prompt()",
        option4: "input()",
        answer: "prompt()"
    },
    {
        question: "Which of the following asks the user for an input?",
        option1: "alert()",
        option2: "confirm()",
        option3: "prompt()",
        option4: "input()",
        answer: "prompt()"
    },
    {
        question: "Which of the following asks the user for an input?",
        option1: "alert()",
        option2: "confirm()",
        option3: "prompt()",
        option4: "input()",
        answer: "prompt()"
    },
];


//Timer
function startTimer() {
    var timerInterval = setInterval(function () {
        timer--;
        timerEl.textContent = timer;

        if (timer === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}

//Start Quiz
function startQuiz() {
    questionEl.textContent = questionsArray[0].question
    option1Btn.textContent = questionsArray[0].option1
    option2Btn.textContent = questionsArray[0].option2
    option3Btn.textContent = questionsArray[0].option3
    option4Btn.textContent = questionsArray[0].option4
}

//Start Button
startBtn.addEventListener("click", function () {
    welcomeEl.style.display = "none";
    highscoreEl.style.display = "none";
    quizEl.style.display = "block";
    startTimer();
    startQuiz();
})

//Highscore Button
function openHighscore() {
    welcomeEl.style.display = "none";
    quizEl.style.display = "none";
    highscoreEl.style.display = "block";
}

function closeHighscore() {
    welcomeEl.style.display = "none";
    quizEl.style.display = "none";
    highscoreEl.style.display = "block";
}


