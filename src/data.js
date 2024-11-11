const weatherData = [];

function collectData() {
  const newData = {
    temperature: (Math.random() * 40).toFixed(1), // Simulated temperature
    humidity: (Math.random() * 100).toFixed(1),    // Simulated humidity
    timestamp: new Date().toISOString()
  };
  weatherData.push(newData);
  return newData;
}

function getData() {
  return weatherData;
}

module.exports = { collectData, getData };
