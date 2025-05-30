function range(arr) {
  // Validate input
  if (!Array.isArray(arr)) {
    throw new TypeError('Input must be an array.');
  }
  if (arr.length === 0) {
    throw new RangeError('Array must not be empty.');
  }

  // Sort the array to ensure the first and last elements are correct
  const sortedArr = arr.slice().sort((a, b) => a - b);

  // Calculate and return the range
  return sortedArr[sortedArr.length - 1] - sortedArr[0];
}

module.exports = range;
