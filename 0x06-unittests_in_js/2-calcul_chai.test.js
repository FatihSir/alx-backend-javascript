const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('type == "SUM"', () => {
    it('equal positive numbers', () => {
      expect(calculateNumber('SUM', 3.0, 3.0)).to.equal(6);
    });

    it('equal positive numbers (alternate)', () => {
      expect(calculateNumber('SUM', 3.7, 2.3)).to.equal(6);
    });

    it('equal negative numbers', () => {
      expect(calculateNumber('SUM', -3.0, -3.0)).to.equal(-6);
    });

    it('equal negative numbers (alternate)', () => {
      expect(calculateNumber('SUM', -3.7, -2.3)).to.equal(-6);
    });

    it('negative and positive numbers', () => {
      expect(calculateNumber('SUM', -3.0, 3.0)).to.equal(0);
    });

    it('positive and negative numbers', () => {
      expect(calculateNumber('SUM', 3.0, -3.0)).to.equal(0);
    });

    it('0 and 0', () => {
      expect(calculateNumber('SUM', 0.0, 0.0)).to.equal(0);
    });
  });

  describe('type == "SUBTRACT"', () => {
    it('equal positive numbers', () => {
      expect(calculateNumber('SUBTRACT', 3.0, 3.0)).to.equal(0);
    });

    it('equal positive numbers (alternate)', () => {
      expect(calculateNumber('SUBTRACT', 3.7, 2.3)).to.equal(2);
    });

    it('equal negative numbers', () => {
      expect(calculateNumber('SUBTRACT', -3.0, -3.0)).to.equal(0);
    });

    it('equal negative numbers (alternate)', () => {
      expect(calculateNumber('SUBTRACT', -3.7, -2.3)).to.equal(-2);
    });

    it('negative and positive numbers', () => {
      expect(calculateNumber('SUBTRACT', -3.0, 3.0)).to.equal(-6.0);
    });

    it('positive and negative numbers', () => {
      expect(calculateNumber('SUBTRACT', 3.0, -3.0)).to.equal(6.0);
    });

    it('0 and 0', () => {
      expect(calculateNumber('SUBTRACT', 0.0, 0.0)).to.equal(0);
    });
  });

  describe('type == "DIVIDE"', () => {
    it('positive numbers', () => {
      expect(calculateNumber('DIVIDE', 10.0, 2.0)).to.equal(5.0);
    });

    it('numbers with different signs', () => {
      expect(calculateNumber('DIVIDE', -9.0, 3.0)).to.equal(-3.0);
    });

    it('numbers with different signs (alternate)', () => {
      expect(calculateNumber('DIVIDE', 9.0, -3.0)).to.equal(-3.0);
    });

    it('negative numbers', () => {
      expect(calculateNumber('DIVIDE', -9.0, -3.0)).to.equal(3.0);
    });

    it('equal positive numbers', () => {
      expect(calculateNumber('DIVIDE', 3.0, 3.0)).to.equal(1);
    });

    it('equal negative numbers', () => {
      expect(calculateNumber('DIVIDE', -3.0, -3.0)).to.equal(1);
    });

    it('equal rounded up numbers', () => {
      expect(calculateNumber('DIVIDE', 3.7, 4.0)).to.equal(1);
    });

    it('equal rounded down numbers', () => {
      expect(calculateNumber('DIVIDE', 3.3, 3.0)).to.equal(1);
    });

    it('0 and positive number', () => {
      expect(calculateNumber('DIVIDE', 0.0, 6.0)).to.equal(0);
    });

    it('0 and negative number', () => {
      expect(calculateNumber('DIVIDE', 0.0, -6.0)).to.equal(-0);
    });

    it('positive number and 0', () => {
      expect(calculateNumber('DIVIDE', 6.0, 0)).to.equal('Error');
    });

    it('positive number and number rounded down to 0', () => {
      expect(calculateNumber('DIVIDE', 6.0, 0.2)).to.equal('Error');
    });

    it('positive number and number rounded up to 0', () => {
      expect(calculateNumber('DIVIDE', 6.0, -0.2)).to.equal('Error');
    });

    it('negative number and 0', () => {
      expect(calculateNumber('DIVIDE', -6.0, 0)).to.equal('Error');
    });

    it('negative number and number rounded down to zero', () => {
      expect(calculateNumber('DIVIDE', -6.0, 0.2)).to.equal('Error');
    });

    it('negative number and number rounded up to zero', () => {
      expect(calculateNumber('DIVIDE', -6.0, -0.2)).to.equal('Error');
    });

    it('0 and 0', () => {
      expect(calculateNumber('DIVIDE', 0.0, 0.0)).to.equal('Error');
    });
  });
});
