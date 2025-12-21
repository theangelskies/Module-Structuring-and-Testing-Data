// Predict and explain first...

// =============> write your prediction here
// I predict that this code will throw an error because the multiply function does not return a value, so when we try to log its result, it will be undefined.

// function multiply(a, b) {
//   console.log(a * b);
// }

// console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// The output shows 320 and The result of multiplying 10 and 32 is undefined because the multiply function logs the product of a and b to the console but does not return it, so when multiply(10, 32) is used in the template literal it evaluates to undefined, which is why the result appears once as 320 and again as undefinedTo fix this, we need to add a return statement that returns the product of a and b.

// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);