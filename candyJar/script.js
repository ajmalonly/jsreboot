// script.js

// Array of candies in the jar
let candies = ["🍬", "🍭", "🍫", "🍩", "🍪", "🍰", "🍮", "🍯", "🥧", "🧁"];
const candyListElement = document.getElementById("candy-list");
const candyAmountElement = document.getElementById("candy-amount");
const messageElement = document.getElementById("message");
const pickCandyButton = document.getElementById("pick-candy");

// Display the initial candy jar contents
const displayCandies = () => {
  candyListElement.innerHTML = ""; // Clear previous list
  candies.forEach(candy => {
    const li = document.createElement("li");
    li.textContent = candy;
    candyListElement.appendChild(li);
  });
  candyAmountElement.textContent = candies.length;
};

// Initial display of candies
displayCandies();

// Pick a random candy from the jar
// Add an event listener to the button
// if the jar is empty, display a message
// select a random candy from the jar
// remove the picked candy from the jar
// display the picked candy
// display the updated jar

pickCandyButton.addEventListener("click", () => {
    if (candies.length === 0) {
        messageElement.textContent = "The candy jar is empty!";
        return;
    }
    
    const randomIndex = Math.floor(Math.random() * candies.length);
    const pickedCandy = candies.splice(randomIndex, 1)[0];
    displayCandies();
    messageElement.textContent = `Picked: ${pickedCandy}`;
});
