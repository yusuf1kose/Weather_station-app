// Default city
let selectedCity = "Pleasanton";

// Handle city selection change
document.getElementById('citySelector').addEventListener('change', (event) => {
  selectedCity = event.target.value;
  console.log(`City selected: ${selectedCity}`); // Debug
  fetchWeatherData(selectedCity);
  fetchAverageTemperature(selectedCity);
});

// Fetch weather data for a city
async function fetchWeatherData(city) {
  try {
    console.log(`Fetching weather data for city: ${city}`); // Debug
    const response = await fetch(`/data/${city}`);
    const data = await response.json();
    console.log('Weather data received:', data); // Debug
    displayWeatherData(data);
  } catch (error) {
    console.error('Error fetching weather data:', error); // Debug
    document.getElementById('dataContainer').innerHTML = '<p>Error fetching weather data.</p>';
  }
}

// Display weather data in the UI
function displayWeatherData(data) {
  const dataContainer = document.getElementById('dataContainer');
  if (!data || data.length === 0) {
    dataContainer.innerHTML = '<p>No weather data available.</p>';
    return;
  }
  dataContainer.innerHTML = data.map(entry => `
    <div class="data-entry">
      <p><strong>Temperature:</strong> ${entry.temperature}°C</p>
      <p><strong>Chance of Rain:</strong> ${entry.chanceOfRain}%</p>
      <p><strong>Chance of Snow:</strong> ${entry.chanceOfSnow}%</p>
      <p><strong>Timestamp:</strong> ${new Date(entry.timestamp).toLocaleString()}</p>
    </div>
  `).join('');
  console.log('Weather data displayed successfully.'); // Debug
}

// Fetch average temperature for a city
async function fetchAverageTemperature(city) {
  try {
    console.log(`Fetching average temperature for city: ${city}`); // Debug
    const response = await fetch(`/average/${city}`);
    const { averageTemperature } = await response.json();
    console.log('Average temperature received:', averageTemperature); // Debug
    document.getElementById('averageTemp').innerText = `${averageTemperature}°C`;
  } catch (error) {
    console.error('Error fetching average temperature:', error); // Debug
    document.getElementById('averageTemp').innerText = 'Error fetching average temperature.';
  }
}

// Fetch data for the default city on page load
document.addEventListener('DOMContentLoaded', () => {
  fetchWeatherData(selectedCity);
  fetchAverageTemperature(selectedCity);
});
