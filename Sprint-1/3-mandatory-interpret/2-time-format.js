const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// There are 6 variable declarations in this program
// Lines: 1, 3, 4, 6, 7, 9

// b) How many function calls are there?
// There is 1 function call in this program
// Line: 12 (console.log)

// c) Using documentation, explain what the expression movieLength % 60 represents
// The expression movieLength % 60 calculates the remainder when movieLength is divided by 60.
// This is used to find the number of remaining seconds after converting the total movie length from seconds to minutes.
// The % operator is known as the modulus operator and it returns the remainder of a division operation.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// The expression (movieLength - remainingSeconds) / 60 calculates the total number of whole minutes in the movie length by first subtracting the remaining seconds from the total movie length in seconds, and then dividing the result by 60 to convert it into minutes.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// The variable result represents the formatted time string in hours, minutes, and seconds.
// A better name for this variable could be formattedTime.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// Yes, this code will work for all values of movieLength because it uses modular arithmetic to calculate the hours, minutes, and seconds.
