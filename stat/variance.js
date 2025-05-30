function variance(arr) {
  try {
    // Validate input
    if (!Array.isArray(arr)) {
      throw new TypeError("Parameter must be an array.");
    }
    if (arr.length === 0) {
      throw new RangeError("Array must not be empty.");
    }
    if (!arr.every(item => typeof item === "number" && !isNaN(item))) {
      throw new TypeError("All elements in the array must be valid numbers.");
    }

    // Calculate the mean (average)
    const mean = arr.reduce((sum, num) => sum + num, 0) / arr.length;

    // Calculate the variance
    const varianceValue = arr.reduce((sum, num) => sum + Math.pow(num - mean, 2), 0) / arr.length;

    return varianceValue;
  } catch (error) {
    console.error("Error in variance function:", error.message);
    return null;
  }
}

module.exports = variance;
