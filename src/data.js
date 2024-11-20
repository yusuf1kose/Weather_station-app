const weatherData = {
  "San Jose": [],
  "Milpitas": [],
  "Pleasanton": [],
  "Los Gatos": [],
  "Santa Clara": []
};

function collectData(city) {
  const tempRanges = {
    "San Jose": [15, 30],
    "Milpitas": [14, 28],
    "Pleasanton": [12, 25],
    "Los Gatos": [13, 27],
    "Santa Clara": [16, 32]
  };

  const [min, max] = tempRanges[city];
  const newData = {
    temperature: (Math.random() * (max - min) + min).toFixed(1), // Simulated temperature
    chanceOfRain: (Math.random() * 30).toFixed(1), // Chance of rain (0-30%)
    chanceOfSnow: (Math.random() * 10).toFixed(1), // Chance of snow (0-10%)
    timestamp: new Date().toISOString()
  };

  weatherData[city].push(newData);
  return newData;
}

function getData(city) {
  return weatherData[city] || [];
}

module.exports = { collectData, getData };
