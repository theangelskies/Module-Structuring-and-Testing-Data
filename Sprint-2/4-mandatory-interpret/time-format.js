function pad(num) {
  return num.toString().padStart(2, "0");
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
  const totalMinutes = (seconds - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;

  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
}

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> write your answer here
// 3 times,  when formatting hours, minutes, and seconds.

// Call formatTimeDisplay with an input of 61, now answer the following:
console.log(formatTimeDisplay(61));

// b) What is the value assigned to num when pad is called for the first time?
/// =============> write your answer here
// 0, because there are 0 hours in 61 seconds.

// c) What is the return value of pad is called for the first time?
// =============> write your answer here 
// "00", because padStart adds a leading zero to the string "0" to make it two characters long.

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// 1, because there is 1 remaining second after calculating the total minutes and hours from 61 seconds.

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// "01", because padStart adds a leading zero to the string "1" to make it two characters long.

//final return value of formatTimeDisplay when called with an input of 61?
// "00:01:01", because there are 0 hours, 1 minute, and 1 second in 61 seconds, and each component is formatted to be two digits long.