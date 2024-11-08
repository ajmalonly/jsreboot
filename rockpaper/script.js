// script.js

// Score variables
let userScore = 0;
let computerScore = 0;

// DOM elements
const userScoreElement = document.getElementById("user-score");
const computerScoreElement = document.getElementById("computer-score");
const resultElement = document.getElementById("result");

// Choices for the game
const choices = document.querySelectorAll(".choice");

// Event listeners for each choice button
choices.forEach(choice => {
  choice.addEventListener("click", () => {
    const userChoice = choice.dataset.choice;
    playRound(userChoice);
  });
});

// Function to play one round
const playRound = (userChoice) => {
  const computerChoice = getComputerChoice();
  const winner = determineWinner(userChoice, computerChoice);
  
  updateScores(winner);
  displayResult(winner, userChoice, computerChoice);
};

// Function to randomly select computer choice
const getComputerChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
};

// Function to determine the winner
const determineWinner = (user, computer) => {
  if (user === computer) {
    return "draw";
  }
  if (
    (user === "rock" && computer === "scissors") ||
    (user === "paper" && computer === "rock") ||
    (user === "scissors" && computer === "paper")
  ) {
    return "user";
  }
  return "computer";
};

// Function to update scores
const updateScores = (winner) => {
  if (winner === "user") {
    userScore++;
    userScoreElement.textContent = userScore;
  } else if (winner === "computer") {
    computerScore++;
    computerScoreElement.textContent = computerScore;
  }
};

// Function to display result message
const displayResult = (winner, userChoice, computerChoice) => {

  if (winner === "draw") {
    resultElement.textContent = `It's a draw! Both chose ${userChoice}.`;
  } else if (winner === "user") {
    resultElement.textContent = `You win! ${userChoice} beats ${computerChoice}.`;
  } else {
    resultElement.textContent = `Computer wins! ${computerChoice} beats ${userChoice}.`;
  }
};

