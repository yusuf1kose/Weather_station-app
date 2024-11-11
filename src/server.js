const express = require('express');
const { collectData, getData } = require('./data');
const { calculateAverageTemperature } = require('./analysis');
const app = express();

app.use(express.static('public'));

app.get('/data', (req, res) => {
  const data = getData();
  res.json(data);
});

app.get('/average', (req, res) => {
  const data = getData();
  const avgTemp = calculateAverageTemperature(data);
  res.json({ averageTemperature: avgTemp });
});

setInterval(collectData, 5000); // Collect new data every 5 seconds

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
