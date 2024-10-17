// Import the arrayManipulation function from the specified module
const arrayManipulation = require("../array-manipulation.js")

// Test case for typical queries with expected result of 882
test("Test with typical queries 0", () => {
  let n = 4
  let queries = [
    [2, 3, 603], // Increment 603 for range 2 to 3
    [1, 1, 286], // Increment 286 for range 1 to 1
    [4, 4, 882], // Increment 882 for range 4 to 4
  ]
  expect(arrayManipulation(n, queries)).toBe(882) // Expected maximum value after operations
})

// Test case for typical queries with expected result of 200
test("Test with typical queries 1", () => {
  let n = 3
  let queries = [
    [1, 2, 100], // Increment 100 for range 1 to 2
    [2, 5, 100], // Increment 100 for range 2 to 5
    [3, 4, 100], // Increment 100 for range 3 to 4
  ]
  expect(arrayManipulation(n, queries)).toBe(200) // Expected maximum value after operations
})

// Test case for typical queries with expected result of 31
test("Test with typical queries 2", () => {
  let n = 10
  let queries = [
    [2, 6, 8], // Increment 8 for range 2 to 6
    [3, 5, 7], // Increment 7 for range 3 to 5
    [1, 8, 1], // Increment 1 for range 1 to 8
    [5, 9, 15], // Increment 15 for range 5 to 9
  ]
  expect(arrayManipulation(n, queries)).toBe(31) // Expected maximum value after operations
})

// Test case for typical queries with expected result of 10
test("Test with typical queries 3", () => {
  let n = 10
  let queries = [
    [1, 5, 3], // Increment 3 for range 1 to 5
    [4, 8, 7], // Increment 7 for range 4 to 8
    [6, 9, 1], // Increment 1 for range 6 to 9
  ]
  expect(arrayManipulation(n, queries)).toBe(10) // Expected maximum value after operations
})

// Test case when there are no queries, expecting a maximum value of 0
test("With no queries", () => {
  let n = 5
  let queries = [] // No operations
  expect(arrayManipulation(n, queries)).toBe(0) // Expected maximum value
})

// Test case with a single query, expecting a maximum value of 100
test("With a single query", () => {
  let n = 10
  let queries = [[1, 5, 100]] // Increment 100 for range 1 to 5
  expect(arrayManipulation(n, queries)).toBe(100) // Expected maximum value
})

// Test case with a single element query, expecting a maximum value of 100
test("With a single element query", () => {
  let n = 1
  let queries = [[1, 1, 100]] // Increment 100 for the only element
  expect(arrayManipulation(n, queries)).toBe(100) // Expected maximum value
})

// Test case for large inputs, expecting a maximum value greater than 0
test("Test with large n", () => {
  let n = 10000000 // Large size of the array
  let queries = [
    [1, 100000, 100], // Increment 100 for range 1 to 100000
    [500000, 1000000, 200], // Increment 200 for range 500000 to 1000000
    [7500000, 10000000, 300], // Increment 300 for range 7500000 to 10000000
  ]
  expect(arrayManipulation(n, queries)).toBeGreaterThan(0) // Ensure the maximum value is greater than 0
})
