// Function to perform array manipulation using the difference array technique
function arrayManipulation(n, queries) {
  // Initialize an array of size (n + 1) with all elements set to 0
  // We use size (n + 1) to simplify the calculation when updating the right boundary of ranges
  let arr = Array(n + 1).fill(0)

  // Loop through each query to apply the range update
  for (let i = 0; i < queries.length; i++) {
    // Destructure the query array to get the start (a), end (b), and increment value (k)
    let [a, b, k] = queries[i]

    // Apply the increment 'k' at the start index 'a - 1'
    arr[a - 1] += k

    // Apply the decrement 'k' at the end index 'b' (if it's within bounds)
    if (b < n) {
      arr[b] -= k
    }
  }

  // Initialize variables to track the maximum value and the current cumulative sum
  let max = 0
  let current = 0

  // Loop through the array to compute the prefix sum and find the maximum value
  for (let i = 0; i < n; i++) {
    // Add the value from the previous index to compute the prefix sum
    if (i > 0) {
      current += arr[i - 1]
    }

    // Check if the current value exceeds the maximum value found so far
    if (current > max) {
      max = current
    }
  }

  // Return the maximum value found after processing all queries
  return max
}

module.exports = arrayManipulation
