JS Reboot
Welcome to JS Reboot! This repository contains a collection of JavaScript-based projects designed to help you practice and master essential JavaScript concepts. Each project covers unique JavaScript skills such as DOM manipulation, event handling, API fetching, and more.

Project Structure
The repository is organized into the following folders, each containing a standalone project:

1. Quiz
2. Calculator
3. Weather API

   
Projects Overview
1. Quiz
A fun and interactive quiz application! This project tests users on various questions and provides immediate feedback on their answers.

Key Features:
JavaScript Concepts: DOM manipulation, array iteration, and event listeners.
Functionality: Users can select answers, receive a score at the end, and reset the quiz to try again.

2. Calculator
A simple calculator that performs basic arithmetic operations such as addition, subtraction, multiplication, and division.

Key Features:
JavaScript Concepts: Basic math operations, event handling, and updating the DOM.
Functionality: Supports real-time calculations as users enter numbers and select operations.

3. Weather API
A weather app that fetches real-time weather data based on the city input provided by the user.

Key Features:
JavaScript Concepts: Fetching data from an API, handling JSON responses, DOM updates.
Functionality: Displays temperature, weather conditions, and an icon based on the user’s chosen location.
API Information:
API: OpenWeatherMap API
Customization: Search by city name or ZIP code; includes background changes based on weather conditions.

Getting Started
To run any of these projects locally:

1. Clone this repository:

   gh repo clone ajmalonly/jsreboot

2. cd jsreboot

3. serve


Open index.html in your browser to view and interact with the project.

Dependencies
The Weather API project requires an API key from OpenWeatherMap. After obtaining your API key, add it to the script.js file in the Weather API folder.

javascript
Copy code
// Replace "YOUR_API_KEY" with your actual API key
const apiKey = "YOUR_API_KEY";
How to Contribute
Feel free to fork the repository and create pull requests to improve these projects or add new ones. Contributions are always welcome!

License
This repository is licensed under the MIT License. See LICENSE for more information.
