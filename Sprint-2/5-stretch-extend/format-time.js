// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

// function formatAs12HourClock(time) {
//   const hours = Number(time.slice(0, 2));
//   if (hours > 12) {
//     return `${hours - 12}:00 pm`;
//   }
//   return `${time} am`;
// }

// const currentOutput = formatAs12HourClock("08:00");
// const targetOutput = "08:00 am";
// console.assert(
//   currentOutput === targetOutput,
//   `current output: ${currentOutput}, target output: ${targetOutput}`
// );

// const currentOutput2 = formatAs12HourClock("23:00");
// const targetOutput2 = "11:00 pm";
// console.assert(
//   currentOutput2 === targetOutput2,
//   `current output: ${currentOutput2}, target output: ${targetOutput2}`
// );
  
// // Morning times
// console.assert(formatAs12HourClock("00:00") === "12:00 am", "Midnight failed");
// console.assert(formatAs12HourClock("01:00") === "1:00 am", "1am failed");
// console.assert(formatAs12HourClock("08:00") === "8:00 am", "8am failed");
// console.assert(formatAs12HourClock("11:00") === "11:00 am", "11am failed");

// // Noon & afternoon
// console.assert(formatAs12HourClock("12:00") === "12:00 pm", "Noon failed");
// console.assert(formatAs12HourClock("13:00") === "1:00 pm", "1pm failed");
// console.assert(formatAs12HourClock("15:00") === "3:00 pm", "3pm failed");

// // Evening & night
// console.assert(formatAs12HourClock("23:00") === "11:00 pm", "11pm failed");

// // Edge formatting
// console.assert(formatAs12HourClock("09:00") === "9:00 am", "Leading zero failed");

function formatAs12HourClock(time) {
  const hours24 = Number(time.slice(0, 2));
  const minutes = time.slice(3, 5);

  if (hours24 === 0) {
    return `12:${minutes} am`;
  }

  if (hours24 === 12) {
    return `12:${minutes} pm`;
  }

  if (hours24 > 12) {
    return `${hours24 - 12}:${minutes} pm`;
  }

  return `${hours24}:${minutes} am`;
}

// Morning times
console.assert(formatAs12HourClock("00:00") === "12:00 am");
console.assert(formatAs12HourClock("01:00") === "1:00 am");
console.assert(formatAs12HourClock("08:00") === "8:00 am");
console.assert(formatAs12HourClock("11:00") === "11:00 am");

// Noon & afternoon
console.assert(formatAs12HourClock("12:00") === "12:00 pm");
console.assert(formatAs12HourClock("13:00") === "1:00 pm");
console.assert(formatAs12HourClock("15:00") === "3:00 pm");

// Evening & night
console.assert(formatAs12HourClock("23:00") === "11:00 pm");

// Edge formatting
console.assert(formatAs12HourClock("09:00") === "9:00 am");

// All passed