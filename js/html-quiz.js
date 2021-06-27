const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
    {
        question: "HTML stands for -",
        choice1: "HighText Machine Language",
        choice2: "HyperText and links Markup Language",
        choice3: "HyperText Markup Language",
        choice4: "None of these",
        answer: 3,
    },
    {
        question:"The correct sequence of HTML tags for starting a webpage is -",
        choice1: "Head, Title, HTML, body",
        choice2: "HTML, Body, Title, Head",
        choice3: "HTML, Head, Title, Body",
        choice4: "HTML, Title, Head, Body",
        answer: 3,
    },
    {
        question: "Which of the following element is responsible for making the text bold in HTML?",
        choice1: "<pre>",
        choice2: "<a>",
        choice3: "<b>",
        choice4: "<br>",
        answer: 3,
    },
    {
        question: "Which of the following tag is used for inserting the largest heading in HTML?",
        choice1: "<h3>",
        choice2: "<h1>",
        choice3: "<h4>",
        choice4: "<h2>",
        answer: 2,
    },
    {
        question: "Which of the following tag is used to insert a line-break in HTML?",
        choice1: "<br>",
        choice2: "<pre>",
        choice3: "<a>",
        choice4: "<b>",
        answer: 1,
    },
    {
        question: "Which character is used to represent the closing of a tag in HTML?",
        choice1: " \ ",
        choice2: " | ",
        choice3: " / ",
        choice4: " . ",
        answer: 3,
    },
    {
        question: "How to insert an image in HTML?",
        choice1: "<img href = "jtp.png" />",
        choice2: "<img url = "jtp.png" />",
        choice3: "<img link = "jtp.png" />",
        choice4: "<img src = "jtp.png" />",
        answer: 4,
    },
    {
        question: "<input> is -",
        choice1: "a format tag.",
        choice2: "an empty tag.",
        choice3: "All of the above",
        choice4: "None of the above",
        answer: 2,
    },
    {
        question: "Which of the following tag is used to define options in a drop-down selection list?",
        choice1: "<select>",
        choice2: "<list>",
        choice3: "<dropdown>",
        choice4: "<option>",
        answer: 4,
    },
    {
        question: "The <hr> tag in HTML is used for -",
        choice1: "The horizontal ruler",
        choice2: "break line",
        choice3: "New line",
        choice4: "The vertical ruler",
        answer: 1,
    }
];

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 10;

startQuiz = () => {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        //go to the end page
        return window.location.assign('Student.html');
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuesions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
        const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

startQuiz();
