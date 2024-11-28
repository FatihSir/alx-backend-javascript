const calculateNumber = (operation, num1, num2) => {
  const roundedA = Math.round(num1);
  const roundedB = Math.round(num2);

  switch (operation) {
    case 'ADD':
      return roundedA + roundedB;
    case 'DIFFERENCE':
      return roundedA - roundedB;
    case 'RATIO':
      return roundedB === 0 ? 'Error' : roundedA / roundedB;
    default:
      throw new Error('Invalid operation type');
  }
};

module.exports = calculateNumber;
