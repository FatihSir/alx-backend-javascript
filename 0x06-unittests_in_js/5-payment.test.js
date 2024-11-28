const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = sinon.spy(console);
  });

  afterEach(() => {
    consoleSpy.log.resetHistory();
  });

  it('sendPaymentRequestToApi(150, 30) logs "The total is: 180" to the console', () => {
    sendPaymentRequestToApi(150, 30);
    expect(consoleSpy.log.calledWith('The total is: 180')).to.be.true;
    expect(consoleSpy.log.calledOnce).to.be.true;
  });

  it('sendPaymentRequestToApi(25, 15) logs "The total is: 40" to the console', () => {
    sendPaymentRequestToApi(25, 15);
    expect(consoleSpy.log.calledWith('The total is: 40')).to.be.true;
    expect(consoleSpy.log.calledOnce).to.be.true;
  });
});
