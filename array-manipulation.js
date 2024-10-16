// Function to perform array manipulation using the difference array technique
function arrayManipulation(n, queries) {
  // Initialize an array of size (n + 1) with all elements set to 0
  let arr = Array(n + 1).fill(0)

  // Loop through each query to apply the range update
  for (let i = 0; i < queries.length; i++) {
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
    current += arr[i] // Accumulate the value at index i
    if (current > max) {
      max = current // Update max if the current sum is greater
    }
  }

  return max // Return the maximum value found
}

// Test cases
let testing_n1 = 3, // Array size 3 for the first test case
  testing_n2 = 10, // Array size 10 for the second test case
  testing_n3 = 10 // Array size 10 for the third test case

// Queries for the first test case (range updates)
let testing_queries1 = [
  [1, 2, 100], // Increment 100 for range 1 to 2
  [2, 5, 100], // Increment 100 for range 2 to 5
  [3, 4, 100], // Increment 100 for range 3 to 4
]

// Queries for the second test case
let testing_queries2 = [
  [2, 6, 8], // Increment 8 for range 2 to 6
  [3, 5, 7], // Increment 7 for range 3 to 5
  [1, 8, 1], // Increment 1 for range 1 to 8
  [5, 9, 15], // Increment 15 for range 5 to 9
]

// Queries for the third test case
let testing_queries3 = [
  [1, 5, 3], // Increment 3 for range 1 to 5
  [4, 8, 7], // Increment 7 for range 4 to 8
  [6, 9, 1], // Increment 1 for range 6 to 9
]

// Execute the function with each test case and print the results
console.log(arrayManipulation(testing_n1, testing_queries1)) // Expected output: 200
console.log(arrayManipulation(testing_n2, testing_queries2)) // Expected output: 31
console.log(arrayManipulation(testing_n3, testing_queries3)) // Expected output: 10
