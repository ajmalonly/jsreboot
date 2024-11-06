// script.js

// Get references to the DOM elements
const searchBtn = document.getElementById("search-btn");
const cityInput = document.getElementById("city-input");
const cityName = document.getElementById("city-name");
const temperature = document.getElementById("temperature");
const conditions = document.getElementById("conditions");
const weatherIcon = document.getElementById("weather-icon");

// OpenWeatherMap API Key and base URL
const apiKey = "YOUR_API_KEY";
const baseURL = "https://api.openweathermap.org/data/2.5/weather";

// Function to fetch and display weather data
const getWeather = async () => {
  const city = cityInput.value;
  if (!city) return alert("Please enter a city name");

  const url = `${baseURL}?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod !== 200) throw new Error(data.message);

    // Update DOM with weather info
    cityName.textContent = `${data.name}, ${data.sys.country}`;
    temperature.textContent = `Temperature: ${data.main.temp}°C`;
    conditions.textContent = `Conditions: ${data.weather[0].description}`;

    // Set weather icon
    const iconCode = data.weather[0].icon;
    weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    weatherIcon.style.display = "block";

  } catch (error) {
    alert("City not found. Please try another city.");
  }
};

// Event listener for the search button
searchBtn.addEventListener("click", getWeather);
