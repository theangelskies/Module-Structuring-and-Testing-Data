// const cardNumber = 4533787178994213;
// const last4Digits = cardNumber.slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.

// console.log(last4Digits);
// Prediction: I predict that the code will give an error because the slice method is not valid for numbers. 


// Actual Error: Uncaught TypeError: cardNumber.slice is not a function


// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// The slice method is used for strings and arrays, but cardNumber is a number.
// Therefore, trying to use slice on a number will likely result in a TypeError.

// Then try updating the expression last4Digits is assigned to, in order to get the correct value
const cardNumber = 4533787178994213;
const last4Digits = cardNumber.toString().slice(-4);
console.log(last4Digits); // "4213