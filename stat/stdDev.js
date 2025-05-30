const variance = require('./variance');

const stdDev = (arr) => {
  // Validate input is an array
  if (!Array.isArray(arr)) {
    throw new TypeError('Input must be an array.');
  }
  // Validate array is not empty
  if (arr.length === 0) {
    throw new RangeError('Array must not be empty.');
  }
  // Validate all elements are numbers and not NaN
  if (!arr.every(item => typeof item === 'number' && !isNaN(item))) {
    throw new TypeError('Array must only contain valid numbers.');
  }

  // Calculate variance using external module
  const varValue = variance(arr);
  // Validate variance is a valid number
  if (typeof varValue !== 'number' || isNaN(varValue)) {
    throw new Error('Variance calculation did not return a valid number.');
  }

  // Return standard deviation as square root of variance
  return Math.sqrt(varValue);
};

module.exports = stdDev;

