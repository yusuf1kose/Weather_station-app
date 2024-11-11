const { expect } = require('chai');
const { collectData, getData } = require('../src/data');

describe('Data Collection', () => {
  it('should add new data to the weather data array', () => {
    const lengthBefore = getData().length;
    collectData();
    const lengthAfter = getData().length;
    expect(lengthAfter).to.equal(lengthBefore + 1);
  });
});
