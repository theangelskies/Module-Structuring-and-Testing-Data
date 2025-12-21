// Predict and explain first...
// I predict that this code will log "The last digit of 42 is 2", "The last digit of 105 is 5", and "The last digit of 806 is 6" because the getLastDigit function converts the global variable num (which is always 103) to a string and returns its last character, which is '3'. However, since the function does not use its parameter, it will always return '3' regardless of the input number.

// Predict the output of the following code:
// =============> Write your prediction here
// The last digit of 42 is 2
// The last digit of 105 is 5
// The last digit of 806 is 6

// const num = 103;

// function getLastDigit() {
//   return num.toString().slice(-1);
// }

// console.log(`The last digit of 42 is ${getLastDigit(42)}`);
// console.log(`The last digit of 105 is ${getLastDigit(105)}`);
// console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here
// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3
// Explain why the output is the way it is
// =============> write your explanation here
// The output is the way it is because the getLastDigit function does not use its parameter to determine which number's last digit to return. Instead, it always converts the global variable num (which is set to 103) to a string and returns its last character, which is '3'. Therefore, regardless of the input provided to getLastDigit, it will always return '3' as the last digit.
// Finally, correct the code to fix the problem
// =============> write your new code here
function getLastDigit(number) {
  return number.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem