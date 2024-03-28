// ID: Name: (Replace this with your student ID, first name, and last name)
import { quizQuestions, getRandomQuiz } from "./quizQuestions.js";

let randomQuiz;

function init() {

   const menu = document.getElementById('menu')
   
   const newQuizButton = document.createElement('button');
   newQuizButton.textContent='newQuiz';
   newQuizButton.addEventListener('click',generateQuiz);
   menu.appendChild(newQuizButton);

   const clearQuizButton = document.createElement('button');
   clearQuizButton.textContent='clearQuiz';
   clearQuizButton.addEventListener('click',clearQuiz);
   menu.appendChild(clearQuizButton);
}

function generateQuiz() {
    clearQuiz();

    randomQuiz = getRandomQuiz();
    const quizContainer = document.getElementById('quizContainer');
    
    const questionDiv = document.createElement('div');
    questionDiv.id = 'question';

    const questionParagraph = document.createElement('p');
    questionParagraph.textContent = randomQuiz.question;
    questionDiv.appendChild(questionParagraph);

    randomQuiz.options.forEach(option => {
        const optionButton = document.createElement('button');
        optionButton.style.margin = '5px';
        optionButton.textContent = option;
        optionButton.addEventListener('click',checkAnswer);
        questionDiv.appendChild(optionButton);
    })

    quizContainer.appendChild(questionDiv);
}

function clearQuiz() {
    const quizContainer = document.getElementById('quizContainer');
    const answerDiv = document.querySelector('.answer');

    quizContainer.innerHTML = '';
    answerDiv.textContent = '';
}

function checkAnswer(e) {
    const selectedOption = e.target.textContent;
    const answerDiv = document.querySelector('.answer');

    if (selectedOption === randomQuiz.answer) {
        answerDiv.textContent = 'Correct';
        answerDiv.style.color = 'green';
    } else {
        answerDiv.textContent = 'Incorrect';
        answerDiv.style.color = 'red';
    }
}

init();
