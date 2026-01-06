// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
// I predict that this code will throw an error because the variable 'decimalNumber' is being redeclared inside the function, which is not allowed in JavaScript.

// Try playing computer with the example to work out what is going on

// function convertToPercentage(decimalNumber) {
//   const decimalNumber = 0.5;
//   const percentage = `${decimalNumber * 100}%`;

//   return percentage;
// }

// console.log(decimalNumber);

// =============> write your explanation here
// The error occurs because the variable 'decimalNumber' is declared twice within the same scope: once as a function parameter and once as a local variable using 'const'. In JavaScript, you cannot redeclare a variable in the same scope using 'let' or 'const'. To fix this, we can either rename the local variable or simply modify the parameter directly without redeclaring it.

// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  return `${decimalNumber * 100}%`;
}

const result = convertToPercentage(0.5);
console.log(result);


