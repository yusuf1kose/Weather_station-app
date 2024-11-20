function calculateAverageTemperature(data) {
  const total = data.reduce((sum, entry) => sum + parseFloat(entry.temperature), 0);
  return (total / data.length).toFixed(1);
}

module.exports = { calculateAverageTemperature };
