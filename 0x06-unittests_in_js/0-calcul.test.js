const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('sums whole numbers without rounding', () => {
    assert.strictEqual(calculateNumber(3.0, 4.0), 7);
  });

  it('rounds the second number down when it is below the midpoint', () => {
    assert.strictEqual(calculateNumber(2.0, 3.3), 5);
  });

  it('rounds both inputs down when they are slightly below integers', () => {
    assert.strictEqual(calculateNumber(3.2, 4.3), 7);
  });

  it('rounds the first input down and keeps the second input as-is if it is whole', () => {
    assert.strictEqual(calculateNumber(5.3, 2.0), 7);
  });

  it('rounds the second input up when it is slightly above the midpoint', () => {
    assert.strictEqual(calculateNumber(3.0, 5.6), 9);
  });

  it('rounds both numbers up when close to the next integer', () => {
    assert.strictEqual(calculateNumber(6.8, 7.6), 15);
  });

  it('rounds only the first input up when the second is already whole', () => {
    assert.strictEqual(calculateNumber(4.7, 6.0), 11);
  });

  it('handles fractional numbers near the midpoint with trailing decimals', () => {
    assert.strictEqual(calculateNumber(3.49999, 5.49999), 9);
  });
});
