const mean = require("./stat/mean");
const median = require("./stat/median");
const mode = require("./stat/mode");
const range = require("./stat/range");
const sort = require("./stat/sort");
const stdDev = require("./stat/stdDev");
const variance = require("./stat/variance");
const weightedMean = require("./stat/weightedMean");

/**
 * Stat class providing statistical utility methods.
 */
class Stat {
  /**
   * Sorts an array.
   * @param {Array} arr - Array to sort
   * @returns {Array} - Sorted array
   */
  sort(arr) {
    return sort(arr);
  }

  /**
   * Calculates the median of an array.
   * @param {Array} arr - Array of numbers
   * @returns {number} - Median value
   */
  median(arr) {
    return median(arr);
  }

  /**
   * Calculates the mean of an array.
   * @param {Array} arr - Array of numbers
   * @returns {number} - Mean value
   */
  mean(arr) {
    return mean(arr);
  }

  /**
   * Calculates the mode of an array.
   * @param {Array} arr - Array of numbers
   * @returns {number|Array} - Mode value(s)
   */
  mode(arr) {
    return mode(arr);
  }

  /**
   * Calculates the range of an array.
   * @param {Array} arr - Array of numbers
   * @returns {number} - Range value
   */
  range(arr) {
    return range(arr);
  }

  /**
   * Calculates the standard deviation of an array.
   * @param {Array} arr - Array of numbers
   * @returns {number} - Standard deviation
   */
  stdDev(arr) {
    return stdDev(arr);
  }

  /**
   * Calculates the variance of an array.
   * @param {Array} arr - Array of numbers
   * @returns {number} - Variance
   */
  variance(arr) {
    return variance(arr);
  }

  /**
   * Calculates the weighted mean of values given weights.
   * @param {Array} values - Array of numbers (values)
   * @param {Array} weights - Array of numbers (weights)
   * @returns {number} - Weighted mean
   */
  weightedMean(values, weights) {
    return weightedMean(values, weights);
  }
}

module.exports = Stat;
