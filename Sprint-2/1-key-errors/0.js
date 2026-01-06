// Predict and explain first...
//  =============> write your prediction here
// I predict that this code will throw an error because the variable 'str' is being redeclared inside the function, which is not allowed in JavaScript.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

// function capitalise(str) {
//   let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//   return str;
// }

// =============> write your explanation here
// The error occurs because the variable 'str' is declared twice within the same scope: once as a function parameter and once as a local variable using 'let'. In JavaScript, you cannot redeclare a variable in the same scope using 'let' or 'const'. To fix this, we can either rename the local variable or simply modify the parameter directly without redeclaring it.
// =============> write your new code here

function capitalise(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}

// call the function
console.log(capitalise("angela"));
