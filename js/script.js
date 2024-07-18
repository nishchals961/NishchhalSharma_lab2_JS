// js/script.js

// Sample quiz data
const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correct: "Paris"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correct: "4"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "J.K. Rowling", "Ernest Hemingway", "Mark Twain"],
        correct: "Harper Lee"
    }
];

let userAnswers = [];
let score = 0;

// Function to load quiz questions
function loadQuiz() {
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = '';

    quizData.forEach((quiz, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `<p>${quiz.question}</p>`;

        quiz.options.forEach(option => {
            const optionLabel = document.createElement('label');
            optionLabel.classList.add('option');
            optionLabel.innerHTML = `
                <input type="radio" name="question${index}" value="${option}">
                ${option}
            `;
            questionDiv.appendChild(optionLabel);
        });

        questionContainer.appendChild(questionDiv);
    });
}

// Function to submit quiz and calculate score
function submitQuiz() {
    userAnswers = [];
    score = 0;

    quizData.forEach((quiz, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption) {
            userAnswers.push(selectedOption.value);
            if (selectedOption.value === quiz.correct) {
                score++;
            }
        } else {
            userAnswers.push(null);
        }
    });

    displayResult();
}

// Function to display the result
function displayResult() {
    const resultContainer = document.getElementById('result-container');
    const percentage = (score / quizData.length) * 100;
    resultContainer.innerHTML = `
        <p>Your score: ${score}/${quizData.length}</p>
        <p>Percentage: ${percentage.toFixed(2)}%</p>
    `;
}

// Event listener for submit button
document.getElementById('submit-btn').addEventListener('click', submitQuiz);

// Load quiz on page load
window.onload = loadQuiz;
