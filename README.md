# Array Manipulation

## Description

This project implements an efficient solution to the Array Manipulation problem using the difference array technique. The function supports multiple range update operations on an array and determines the maximum value after all updates.

## Features

- Handles multiple range increment operations.
- Uses a difference array approach for optimal performance.
- Includes test cases to validate functionality and performance.

## Installation

1. Clone the repository:

   git clone https://github.com/ricard`oguerrasantana/array-manipulation.git

2. Navigate to the project directory:

   cd array-manipulation

3. Install the necessary dependencies:

   npm install

## Usage

You can use the `arrayManipulation` function by importing it into your script:

const arrayManipulation = require('./array-manipulation.js');

### Example

let n = 5;
let queries = [
[1, 2, 100],
[2, 5, 100],
[3, 4, 100],
];
let result = arrayManipulation(n, queries);
console.log(result); // Output: 200

## Running Tests

To run the test suite, use the following command:

npm test

## Contributing

Contributions are welcome! Please feel free to submit a pull request or report any issues.

## License

This project is licensed under the MIT License.
