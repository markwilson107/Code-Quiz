var timerEl = document.getElementById("timer");
var startBtn = document.getElementById("startBtn");
var questionCounterEl = document.getElementById("questionCounter");
var option1Btn = document.getElementById("option1");
var option2Btn = document.getElementById("option2");
var option3Btn = document.getElementById("option3");
var option4Btn = document.getElementById("option4");
var questionEl = document.getElementById("question");
var scoreText = document.getElementById("score");
var scoreName = document.getElementById("score-name");
var scoreSave = document.getElementById("save-score");
var highscoreBtn = document.getElementById("highscoreBtn");
var welcomeEl = document.getElementById("welcome-page");
var quizEl = document.getElementById("quiz-page");
var highscoreEl = document.getElementById("highscore-page");
var endEl = document.getElementById("quiz-end");
var highscoreList = document.getElementById("highscore-list");
var timer = 60;
var questionCounter = 0;
var correct = 0;
var int1 = 0;
var int2 = 0;
var int3 = 0;
var int4 = 0;

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
        question: 'What type of variable is this? Variable = [1,2,3];',
        option1: "index",
        option2: "array",
        option3: "list",
        option4: "JSON",
        answer: "array"
    },
    {
        question: "Which function is used to generate a random number?",
        option1: "choose()",
        option2: "randomNumber()",
        option3: "getRandom()",
        option4: "random()",
        answer: "random()"
    },
    {
        question: "Which of these are JavaScript Data Types?",
        option1: "data",
        option2: "value",
        option3: "null",
        option4: "boolean",
        answer: "boolean"
    },
    {
        question: "Which symbol is used for comments in Javascript?",
        option1: "//",
        option2: "/*",
        option3: "<!-- --!>",
        option4: "//*",
        answer: "//"
    },
    {
        question: 'What would be the result of 3+2+"7"?',
        option1: "12",
        option2: "327",
        option3: "7",
        option4: "57",
        answer: "57"
    },
    {
        question: "What is missing? _____.screen.width",
        option1: "display",
        option2: "window",
        option3: "document",
        option4: "navigator",
        answer: "window"
    },
    {
        question: "What tag do we use when loading a .js file?",
        option1: "<link>",
        option2: "<javascript>",
        option3: "<script>",
        option4: "<load>",
        answer: "<script>"
    },
    {
        question: "What is missing? _____ name() { }",
        option1: "function",
        option2: "variable",
        option3: "define",
        option4: "console",
        answer: "function"
    },
    {
        question: "How to we convert a string to an integer?",
        option1: "convert()",
        option2: "parse()",
        option3: "parseInt()",
        option4: "integer()",
        answer: "parseInt()"
    },
    {
        question: "What do we use to set teh attributes of an element?",
        option1: "setAttr()",
        option2: "Attr()",
        option3: "Attributes()",
        option4: "setAttribute()",
        answer: "setAttribute()"
    },
    {
        question: "What will be returned? Variable = false || (3 == 4)",
        option1: "false",
        option2: "4",
        option3: "true",
        option4: "3",
        answer: "false"
    },
];


//Timer
function startTimer() {
    var timerInterval = setInterval(function () {
        timer--;
        timerEl.textContent = timer;

        if (timer < 1) {
            endQuiz();
            clearInterval(timerInterval);
        }
    }, 1000);
}

//Start Quiz
function startQuiz() {
    if (questionCounter < questionsArray.length) {
        questionEl.textContent = questionsArray[questionCounter].question
        option1Btn.textContent = questionsArray[questionCounter].option1
        option2Btn.textContent = questionsArray[questionCounter].option2
        option3Btn.textContent = questionsArray[questionCounter].option3
        option4Btn.textContent = questionsArray[questionCounter].option4
    } else {
        endQuiz();
    }
}

//End Quiz
function endQuiz() {
    timer = 1;
    welcomeEl.style.display = "none";
    highscoreEl.style.display = "none";
    quizEl.style.display = "none";
    endEl.style.display = "block";
    scoreText.textContent = correct;
}

//Start Button
startBtn.addEventListener("click", function () {
    welcomeEl.style.display = "none";
    highscoreEl.style.display = "none";
    quizEl.style.display = "block";
    endEl.style.display = "none";
    startTimer();
    startQuiz();
})

//Highscore Button
function openHighscore() {
    welcomeEl.style.display = "none";
    quizEl.style.display = "none";
    highscoreEl.style.display = "block";
    endEl.style.display = "none";
    renderHighscore();
}

function closeHighscore() {
    welcomeEl.style.display = "none";
    quizEl.style.display = "block";
    highscoreEl.style.display = "none";
    endEl.style.display = "none";
}

//Render Highscore
function renderHighscore() {
    highscoreList.innerHTML = "";
    for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.getItem("hscore" + i) !== null) {
            if (localStorage.key(i).includes("hscore")) {
                var li = document.createElement("li");
                li.textContent = localStorage.getItem("hscore" + i);
                highscoreList.appendChild(li);
            }
        }
    }
}

//Button Color Animation
function buttonAnim(buttonVar, isCorrect) {
    //Turns button green if answer is correct
    if (isCorrect === 1) {
        buttonVar.setAttribute("class", "btn btn-success");
    }
    //Turns button red if answer is incorrect
    if (isCorrect === 0) {
        buttonVar.setAttribute("class", "btn btn-danger");
    }
    //Resets the button to default
    if (isCorrect === -1) {
        buttonVar.setAttribute("class", "btn btn-primary");
    }
}

//Answer Buttons
option1Btn.addEventListener("click", function () {
    //Check is Option1 button is pressed and if its correct
    if (questionsArray[questionCounter].option1 === questionsArray[questionCounter].answer) {
        correct++;
        buttonAnim(option1Btn, 1);
    }
    else {
        if (timer - 5 > 0) {
            timer -= 5;
        }
        buttonAnim(option1Btn, 0);
    }
    questionCounter++;
    questionCounterEl.textContent = questionCounter + 1;
    int1 = setInterval(function () {
        buttonAnim(option1Btn, -1);
        startQuiz();
        clearInterval(int1);
    }, 500)

})
option2Btn.addEventListener("click", function () {
    //Check is Option2 button is pressed and if its correct
    if (questionsArray[questionCounter].option2 === questionsArray[questionCounter].answer) {
        correct++;
        buttonAnim(option2Btn, 1);
    }
    else {
        if (timer - 5 > 0) {
            timer -= 5;
        }
        buttonAnim(option2Btn, 0);
    }
    questionCounter++;
    questionCounterEl.textContent = questionCounter + 1;
    int2 = setInterval(function () {
        buttonAnim(option2Btn, -1);
        startQuiz();
        clearInterval(int2);
    }, 500)
})
option3Btn.addEventListener("click", function () {
    //Check is Option3 button is pressed and if its correct
    if (questionsArray[questionCounter].option3 === questionsArray[questionCounter].answer) {
        correct++;
        buttonAnim(option3Btn, 1);
    }
    else {
        if (timer - 5 > 0) {
            timer -= 5;
        }
        buttonAnim(option3Btn, 0);
    }
    questionCounter++;
    questionCounterEl.textContent = questionCounter + 1;
    int3 = setInterval(function () {
        buttonAnim(option3Btn, -1);
        startQuiz();
        clearInterval(int3);
    }, 500)
})
option4Btn.addEventListener("click", function () {
    //Check is Option4 button is pressed and if its correct
    if (questionsArray[questionCounter].option4 === questionsArray[questionCounter].answer) {
        correct++;
        buttonAnim(option4Btn, 1);
    }
    else {
        if (timer - 5 > 0) {
            timer -= 5;
        }
        buttonAnim(option4Btn, 0);
    }
    questionCounter++;
    questionCounterEl.textContent = questionCounter + 1;
    int4 = setInterval(function () {
        buttonAnim(option4Btn, -1);
        startQuiz();
        clearInterval(int4);
    }, 500)
})

//Save Highscore Button
scoreSave.addEventListener("click", function () {
    if (scoreName.value != "") {
        if (localStorage.getItem(scoreName.value) !== null) {
            var con = confirm("This name already exists. Do you want to replace it?")
            if (con === false) {
                return;
            }
        }
        //Saves score to local storage
        localStorage.setItem("hscore" + localStorage.length, scoreName.value + ": " + correct);
        highscoreEl.style.display = "block";
        endEl.style.display = "none";
        renderHighscore();
    }
})