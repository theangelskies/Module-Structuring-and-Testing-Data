// Predict and explain first...
//  =============> write your prediction here
// I predict that this code will log "The sum of 10 and 32 is undefined" because the sum function has a return statement that does not return any value, causing it to return undefined by default.

// function sum(a, b) {
//   return;
//   a + b;
// }

// console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

