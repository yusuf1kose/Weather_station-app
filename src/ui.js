async function fetchWeatherData() {
    try {
      const response = await fetch('/data');
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
        <p><strong>Humidity:</strong> ${entry.humidity}%</p>
        <p><strong>Timestamp:</strong> ${entry.timestamp}</p>
      </div>
    `).join('');
  }
  
  async function fetchAverageTemperature() {
    try {
      const response = await fetch('/average');
      const { averageTemperature } = await response.json();
      document.getElementById('averageTemp').innerText = `${averageTemperature}°C`;
    } catch (error) {
      console.error('Error fetching average temperature:', error);
    }
  }
  
  fetchWeatherData();
  fetchAverageTemperature();
  