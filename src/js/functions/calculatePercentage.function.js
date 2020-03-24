const calculatePercentage = (numerator, denominator, precision = 1) => {
  return Number(numerator / denominator * 100)
    .toFixed(precision);
};

export {
  calculatePercentage
};
