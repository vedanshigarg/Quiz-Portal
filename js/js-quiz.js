const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
    {
        question: "Q 1 - Which of the following is correct about features of JavaScript?",
        choice1: "JavaScript is complmentary to and integrated with HTML.",
        choice2: "JavaScript is open and cros-platform",
        choice3: "Both of the above",
        choice4: "All of the above",
        answer: 3,
    },
    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        choice1: "<script href='xxx.js'>",
        choice2: "<script name='xxx.js'>",
        choice3: "<script src='xxx.js'>",
        choice4: "<script file='xxx.js'>",
        answer: 3,
    },
    {
        question: " How do you write 'Hello World' in an alert box?",
        choice1: "msgBox('Hello World');",
        choice2: "alertBox('Hello World');",
        choice3: "msg('Hello World');",
        choice4: "alert('Hello World');",
        answer: 4,
    },
    {
        question: " How do you write 'Hello World' in an alert box?",
        choice1: "msgBox('Hello World');",
        choice2: "alertBox('Hello World');",
        choice3: "msg('Hello World');",
        choice4: "alert('Hello World');",
        answer: 4,
    },
    {
        question: " How do you write 'Hello World' in an alert box?",
        choice1: "msgBox('Hello World');",
        choice2: "alertBox('Hello World');",
        choice3: "msg('Hello World');",
        choice4: "alert('Hello World');",
        answer: 4,
    },
    {
        question: "Which of the following type of variable takes precedence over other if names are same?",
        choice1: "global-variable;",
        choice2: "local-variable",
        choice3: "Both of the above",
        choice4: "None of the above",
        answer: 2,
    },
    {
        question: "Which of the following function of Number object returns a string value version of the current number?",
        choice1: "toFixed()",
        choice2: "toString()",
        choice3: "toLocaleString()",
        choice4: "toPrecision()",
        answer: 2,
    },
    {
        question: "Which of the following function of String object returns the characters in a string beginning at the specified location through the specified number of characters?",
        choice1: "slice()",
        choice2: "split()",
        choice3: "substr()",
        choice4: "search()",
        answer: 3,
    },
    {
        question: "Which of the following function of Array object applies a function simultaneously against two values of the array (from left-to-right) as to reduce it to a single value?",
        choice1: "pop()",
        choice2: "push()",
        choice3: "reduce()",
        choice4: "reduceRight()",
        answer: 3,
    },
    {
        question: "Which of the following function of Array object reverses the order of the elements of an array?",
        choice1: "push()",
        choice2: "reverse()",
        choice3: "reduce()",
        choice4: "reduceRight()",
        answer: 2,
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
