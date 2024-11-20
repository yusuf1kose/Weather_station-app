
  async function fetchWeatherData(city) {
  try {
    const response = await fetch(`/data/${city}`);
    const data = await response.json();
    displayWeatherData(data);
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}

function displayWeatherData(data) {
  const dataContainer = document.getElementById('dataContainer');
  if (data.length === 0) {
    dataContainer.innerHTML = '<p>No data available.</p>';
    return;
  }
  dataContainer.innerHTML = data.map(entry => `
    <div class="data-entry">
      <p><strong>Temperature:</strong> ${entry.temperature}°C</p>
      <p><strong>Chance of Rain:</strong> ${entry.chanceOfRain}%</p>
      <p><strong>Chance of Snow:</strong> ${entry.chanceOfSnow}%</p>
      <p><strong>Timestamp:</strong> ${entry.timestamp}</p>
    </div>
  `).join('');
}

async function fetchAverageTemperature(city) {
  try {
    const response = await fetch(`/average/${city}`);
    const { averageTemperature } = await response.json();
    document.getElementById('averageTemp').innerText = `${averageTemperature}°C`;
  } catch (error) {
    console.error('Error fetching average temperature:', error);
  }
}

// Event listener for city selection
document.getElementById('citySelector').addEventListener('change', (event) => {
  const city = event.target.value;
  fetchWeatherData(city);
  fetchAverageTemperature(city);
});
