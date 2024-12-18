const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('operation == "ADD"', () => {
    it('adds two small positive numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 2.6), 4);
    });

    it('adds one negative and one positive number', () => {
      assert.strictEqual(calculateNumber('SUM', -1.5, 3.2), 2);
    });

    it('adds two negative numbers', () => {
      assert.strictEqual(calculateNumber('SUM', -1.7, -2.8), -5);
    });

    it('adds zero and a positive number', () => {
      assert.strictEqual(calculateNumber('SUM', 0.0, 4.9), 5);
    });

    it('adds zero and a negative number', () => {
      assert.strictEqual(calculateNumber('SUM', 0.0, -3.6), -4);
    });
  });

  describe('operation == "DIFFERENCE"', () => {
    it('subtracts two positive numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 7.2, 3.6), 3);
    });

    it('subtracts a positive number from a negative number', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -5.8, 3.1), -9);
    });

    it('subtracts a negative number from a positive number', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 6.7, -2.3), 9);
    });

    it('subtracts zero from a number', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 4.5, 0.0), 5);
    });

    it('subtracts a number from zero', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 0.0, -2.8), 3);
    });
  });

  describe('operation == "RATIO"', () => {
    it('divides two positive numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 9.0, 2.0), 4.5);
    });

    it('divides a positive number by a negative number', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 7.5, -2.0), -4);
    });

    it('divides a negative number by a positive number', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -8.1, 4.2), -2);
    });

    it('returns an error when dividing by zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 5.0, 0), 'Error');
    });

    it('returns an error when both numbers are zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, 0.0), 'Error');
    });
  });
});
