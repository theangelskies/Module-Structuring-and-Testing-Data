const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

console.log(num);

// This code generates a random whole number between minimum and maximum, including both values.
// Math.random() produces a floating-point number between 0 (inclusive) and 1 (exclusive).
// Multiplying this by (maximum - minimum + 1) scales it to the range of possible values.
// Math.floor() then rounds this down to the nearest whole number.  
// The + 1 ensures the maximum value is possible.
