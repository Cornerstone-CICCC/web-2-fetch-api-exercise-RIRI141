// YOUR JS CODE HERE
const API_URL =
  "https://api.open-meteo.com/v1/forecast?latitude=35.652832&longitude=139.839478&current=temperature_2m,is_day,rain,showers,wind_speed_10m&timezone=auto&forecast_days=1";

fetch(API_URL)
  .then((response) => response.json())
  .then((data) => {
    displayWeather(data);
  })
  .catch((error) => console.error("Error:", error));

function displayWeather(data) {
  const weatherContainer = document.getElementById("weather-container");
  const temperature = data.current.temperature_2m + "°C";
  const windSpeed = data.current.wind_speed_10m + " km/h";
  const timezone = data.timezone;
  const time = new Date(data.current.time).toLocaleString();

  weatherContainer.innerHTML = `
    <h1><strong> ${temperature}</strong></h1>
    <h3><strong>Wind speed: ${windSpeed}</strong></h3>
    <h2><strong> ${timezone}</strong></h2>
    <h3><strong>Last updated: ${time}</strong></h3>
  `;
}
