const express = require('express');
const { collectData, getData } = require('./data');
const { calculateAverageTemperature } = require('./analysis');
const app = express();

app.use(express.static('public'));

// Endpoint for fetching weather data for a specific city
app.get('/data/:city', (req, res) => {
  const city = req.params.city;
  const data = getData(city);
  res.json(data);
});

// Endpoint for fetching the average temperature for a specific city
app.get('/average/:city', (req, res) => {
  const city = req.params.city;
  const data = getData(city);
  const avgTemp = calculateAverageTemperature(data);
  res.json({ averageTemperature: avgTemp });
});

// Collect data for all cities every 5 seconds
const cities = ["San Jose", "Milpitas", "Pleasanton", "Los Gatos", "Santa Clara"];
setInterval(() => {
  cities.forEach(city => collectData(city));
}, 5000);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
