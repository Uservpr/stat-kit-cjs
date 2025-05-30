const sort = require("./sort");

function median(arr) {
  try {
    // Validate input
    if (!Array.isArray(arr)) {
      throw new TypeError("Parameter must be an array.");
    }
    if (arr.length === 0) {
      throw new RangeError("Array must not be empty.");
    }

    // Sort the array
    const sortedArr = sort(arr);

    // Calculate the median
    const midIndex = Math.floor(sortedArr.length / 2);
    if (sortedArr.length % 2 === 0) {
      // If even, return the average of the two middle numbers
      return (sortedArr[midIndex - 1] + sortedArr[midIndex]) / 2;
    } else {
      // If odd, return the middle number
      return sortedArr[midIndex];
    }
  } catch (error) {
    console.error("Error in median function:", error.message);
    return null; // Return null or handle the error as needed
  }
}

module.exports = median;
