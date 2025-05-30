function weightedMean(values, weights) {
  // Validate input types
  if (!Array.isArray(values) || !Array.isArray(weights)) {
    throw new TypeError('Both values and weights must be arrays.');
  }
  // Validate that both arrays have the same length
  if (values.length !== weights.length) {
    throw new RangeError('Values and weights must have the same length.');
  }
  // Validate that all elements in both arrays are numbers
  if (!values.every(item => typeof item === 'number' && !isNaN(item)) ||
      !weights.every(item => typeof item === 'number' && !isNaN(item))) {
    throw new TypeError('Both values and weights must contain valid numbers.');
  }

  let total = 0;
  let weightSum = 0;

  // Calculate the weighted sum and the total weight
  for (let i = 0; i < values.length; i++) {
    total += values[i] * weights[i];
    weightSum += weights[i];
  }

  // Return the weighted mean
  return total / weightSum;
}

module.exports = weightedMean;
