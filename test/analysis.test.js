const { expect } = require('chai');
const { calculateAverageTemperature } = require('../src/analysis');

describe('Data Analysis', () => {
  it('should calculate the average temperature correctly', () => {
    const data = [
      { temperature: '20.0' },
      { temperature: '22.0' },
      { temperature: '18.0' }
    ];
    const avgTemp = calculateAverageTemperature(data);
    expect(avgTemp).to.equal('20.0');
  });
});
