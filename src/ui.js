let selectedCity = "Los Gatos"; // Default city

function handleCityChange() {
  const citySelector = document.getElementById("citySelector");
  selectedCity = citySelector.value; // Update the selected city
  fetchWeatherData(); // Fetch weather data for the new city
  fetchAverageTemperature(); // Fetch average temperature for the new city
}

async function fetchWeatherData() {
  try {
    const response = await fetch(`/data/${selectedCity}`);
    const data = await response.json();
    displayWeatherData(data);
  } catch (error) {
    console.error('Error fetching weather data:', error);
    document.getElementById('dataContainer').innerHTML = '<p>Error fetching data.</p>';
  }
}

function displayWeatherData(data) {
  const dataContainer = document.getElementById('dataContainer');
  if (!data || data.length === 0) {
    dataContainer.innerHTML = '<p>No data available.</p>';
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
}

async function fetchAverageTemperature() {
  try {
    const response = await fetch(`/average/${selectedCity}`);
    const { averageTemperature } = await response.json();
    document.getElementById('averageTemp').innerText = `${averageTemperature}°C`;
  } catch (error) {
    console.error('Error fetching average temperature:', error);
    document.getElementById('averageTemp').innerText = 'Error fetching average temperature.';
  }
}

// Fetch data for the default city when the page loads
document.addEventListener('DOMContentLoaded', () => {
  fetchWeatherData();
  fetchAverageTemperature();
});
