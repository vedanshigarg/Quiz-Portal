const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
    {
        question:"CSS stands for -",
        choice1: "Cascade style sheets",
        choice2: "Color and style sheets",
        choice3: "Cascading style sheets",
        choice4: "None of the above",
        answer: 1,
    },
    {
        question:
            "The property in CSS used to change the background color of an element is -",
        choice1: "bgcolor",
        choice2: "color",
        choice3: "background-color",
        choice4: "All of the above",
        answer: 3,
    },
    {
        question: "The property in CSS used to change the text color of an element is -",
        choice1: "bgcolor",
        choice2: "color",
        choice3: "background-color",
        choice4: "all of the above",
        answer: 2,
    },
    {
        question: "The HTML attribute used to define the internal stylesheet is -",
        choice1: "<style>",
        choice2: "style",
        choice3: "<link>",
        choice4: "<script>",
        answer: 1,
    },
    {
        question: "Which of the following is the correct syntax to display the hyperlinks without any underline?",
        choice1: "a {text-decoration : underline;}",
        choice2: "a {decoration : no-underline;}",
        choice3: "a {text-decoration : none;}",
        choice4: "None of the above",
        answer: 3,
    },
    {
        question: "Which of the following property is used as the shorthand property for the padding properties?",
        choice1: "padding",
        choice2: "padding-left",
        choice3: "padding-right",
        choice4: "all of the above",
        answer: 1,
    },
    {
        question: "The CSS property used to make the text bold is",
        choice1: "font-weight : bold",
        choice2: "font: bold",
        choice3: "weight:bold",
        choice4: "Style:bold",
        answer: 1,
    },
    {
        question: "The CSS property used to specify the transparency of an element is -",
        choice1: "opacity",
        choice2: "filter",
        choice3: "visiblity",
        choice4: "overlay",
        answer: 1,
    },
    {
        question: "Which of the following CSS property is used to specify the space between every letter inside an element?",
        choice1: "alpha-spacing",
        choice2: "character-spacing",
        choice3: "letter-spacing",
        choice4: "alphabet-spacing",
        answer: 3,
    },
    {
        question: "The CSS property used to specify whether the text is written in the horizontal or vertical direction?",
        choice1: "writing-mode",
        choice2: "text-indent",
        choice3: "word-break",
        choice4: "None of the above",
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
        return window.location.assign('/end.html');
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
