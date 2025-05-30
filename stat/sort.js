function sort(arr) {
  // Validate input
  if (!Array.isArray(arr)) {
    throw new TypeError('Input must be an array.');
  }
  if (arr.length === 0) {
    return arr; // Return empty array as is
  }

  // Bubble Sort implementation with optimization to stop if no swaps are made in a pass
  const sortedArr = arr.slice(); // Create a copy to avoid mutating the original array
  let n = sortedArr.length;
  let swapped;

  for (let i = 0; i < n - 1; i++) {
    swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (sortedArr[j] > sortedArr[j + 1]) {
        [sortedArr[j], sortedArr[j + 1]] = [sortedArr[j + 1], sortedArr[j]];
        swapped = true;
      }
    }
    if (!swapped) {
      break; // No swaps means array is sorted
    }
  }

  return sortedArr;
}

module.exports = sort;

