const { expect } = require('chai');

const sum = require('../src/sum');

describe('sum', () => {
  it('1+2 should be 3', () => {
    expect(sum(1, 2)).to.equal(3);
  });
});
