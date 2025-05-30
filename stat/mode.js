function mode(arr) {
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

    // Count frequency of each number
    const frequency = {};
    let maxFreq = 0;

    for (const num of arr) {
      frequency[num] = (frequency[num] || 0) + 1;
      if (frequency[num] > maxFreq) {
        maxFreq = frequency[num];
      }
    }

    // If all numbers appear once, no mode
    if (maxFreq === 1) {
      return null;
    }

    // Collect all numbers with max frequency
    const modes = Object.keys(frequency)
      .filter(key => frequency[key] === maxFreq)
      .map(Number);

    // Return single mode or array of modes
    return modes.length === 1 ? modes[0] : modes;

  } catch (error) {
    console.error("Error in mode function:", error.message);
    return null;
  }
}

module.exports = mode;
