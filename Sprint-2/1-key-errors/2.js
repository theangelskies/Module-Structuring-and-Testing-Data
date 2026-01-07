
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// I predict that this code will throw a syntax error because the parameter name '3' is not a valid identifier in JavaScript.

// function square(3) {
//     return num * num;
// }

// =============> write the error message here
// SyntaxError: Unexpected number

// =============> explain this error message here
// The error message indicates that there is an unexpected number in the code. In JavaScript, variable and parameter names cannot start with a number. Therefore, using '3' as a parameter name is invalid syntax. To fix this, we need to rename the parameter to a valid identifier, such as 'num'.

// Finally, correct the code to fix the problem
// =============> write your new code here
function square(num) {
  return num * num;
}

// call the function to test it
console.log(square(3));


