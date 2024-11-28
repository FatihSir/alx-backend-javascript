const Utils = require('./utils');

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const totalCost = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  return `The total is: ${totalCost}`;
};

module.exports = sendPaymentRequestToApi;
