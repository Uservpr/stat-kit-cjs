function mean(arr) {
  // Check if the input is an array
  if (!Array.isArray(arr)) {
    throw new TypeError('Input must be an array');
  }

  // Check if the array is empty
  if (arr.length === 0) {
    throw new RangeError('Array must not be empty');
  }

  // Calculate the sum using reduce for better readability and performance
  const sum = arr.reduce((acc, value) => {
    // Check if each value is a number
    if (typeof value !== 'number') {
      throw new TypeError('All elements in the array must be numbers');
    }
    return acc + value;
  }, 0);

  // Return the mean
  return sum / arr.length;
}

module.exports = mean;
