// JavaScript file (script.js)

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
  const questionElement = document.getElementById("question");
  const choicesElement = document.getElementById("choices");
  const nextButton = document.getElementById("next-button");
  const scoreElement = document.getElementById("score");
  const timerElement = document.getElementById("time-left");
  const correctSound = document.getElementById("correct-sound");
  const incorrectSound = document.getElementById("incorrect-sound");
  
  // Shuffle questions and answers
  const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);
  
  // Display question
  const showQuestion = () => {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    
    // Clear previous choices
    choicesElement.innerHTML = "";
  
    // Shuffle and render choices
    shuffleArray(currentQuestion.choices).forEach(choice => {
      const li = document.createElement("li");
      li.textContent = choice;
      li.addEventListener("click", () => checkAnswer(choice));
      choicesElement.appendChild(li);
    });
  
    startTimer();
  };
  
  // Start timer
  const startTimer = () => {
    clearInterval(timerInterval);
    timeLeft = 10;
    timerElement.textContent = timeLeft;
  
    timerInterval = setInterval(() => {
      timeLeft--;
      timerElement.textContent = timeLeft;
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        incorrectSound.play();
        nextQuestion();
      }
    }, 1000);
  };
  
  // Check answer
  const checkAnswer = (selectedChoice) => {
    const correctAnswer = questions[currentQuestionIndex].answer;
  
    // Update score and play sound
    if (selectedChoice === correctAnswer) {
      score++;
      correctSound.play();
    } else {
      incorrectSound.play();
    }
  
    nextQuestion();
  };
  
  // Move to next question
  const nextQuestion = () => {
    clearInterval(timerInterval);
    currentQuestionIndex++;
  
    // Show next question or end quiz
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      endQuiz();
    }
  
    scoreElement.textContent = `Score: ${score} / ${questions.length}`;
  };
  
  // End quiz
  const endQuiz = () => {
    questionElement.textContent = "Quiz Completed!";
    choicesElement.innerHTML = ""; // Clear choices
    timerElement.textContent = ""; // Hide timer
    nextButton.style.display = "none"; // Hide next button
    scoreElement.textContent = `Final Score: ${score} / ${questions.length}`;
  };
  
  // Start quiz
  const startQuiz = () => {
    shuffleArray(questions);
    showQuestion();
    scoreElement.textContent = `Score: ${score}`;
  };
  
  // Initialize quiz on load
  startQuiz();
  