// Questions array
const questions = [
    { question: "What is the capital of France?", choices: ["Berlin", "Madrid", "Paris", "Rome"], answer: "Paris" },
    { question: "Which planet is known as the Red Planet?", choices: ["Earth", "Mars", "Jupiter", "Saturn"], answer: "Mars" },
    { question: "Who wrote 'To Kill a Mockingbird'?", choices: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "J.K. Rowling"], answer: "Harper Lee" },
    { question: "What is the largest mammal in the world?", choices: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"], answer: "Blue Whale" },
    { question: "What is the largest organ of the human body?", choices: ["Heart", "Liver", "Lungs", "Skin"], answer: "Skin" },
    { question: "What is the smallest country in the world?", choices: ["Monaco", "Maldives", "Vatican City", "San Marino"], answer: "Vatican City" },
    { question: "What is the currency of Japan?", choices: ["Yuan", "Yen", "Won", "Dollar"], answer: "Yen" },
    { question: "What is the tallest mountain in the world?", choices: ["Mount Kilimanjaro", "Mount Everest", "K2", "Kangchenjunga"], answer: "Mount Everest" },
    { question: "What is the largest ocean on Earth?", choices: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"], answer: "Pacific Ocean" },
    { question: "What is the smallest ocean on Earth?", choices: ["Arctic Ocean", "Indian Ocean", "Southern Ocean", "Atlantic Ocean"], answer: "Arctic Ocean" }
];

// Initial state
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 10;
let timerInterval;

// Select DOM elements

// Shuffle questions and answers
const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

// Display question
const showQuestion = () => {

    // Clear previous choices  
    // Shuffle and render choices

}
// Start timer
const startTimer = () => {

};

// Check answer
const checkAnswer = (selectedChoice) => {
    // Update score and play sound
};

// Move to next question
const nextQuestion = () => {

};

// End quiz
const endQuiz = () => {

};

// Start quiz
const startQuiz = () => {

};

// Initialize quiz on load
startQuiz();
