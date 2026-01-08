function find(str, char) {
  let index = 0;

  while (index < str.length) {
    if (str[index] === char) {
      return index;
    }
    index++;
  }
  return -1;
}

console.log(find("code your future", "u"));
console.log(find("code your future", "z"));

// The while loop statement allows us to do iteration - the repetition of a certain number of tasks according to some condition
// See the docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while

// Use the Python Visualiser to help you play computer with this example and observe how this code is executed
// Pay particular attention to the following:

// a) How the index variable updates during the call to find
// The index variable starts at 0 and increments by 1 each time the loop runs.

// b) What is the if statement used to check
// The if statement checks if the character at the current index of the string matches the target character.

// c) Why is index++ being used?
// The index++ is used to move to the next character in the string for the next iteration of the loop.

// d) What is the condition index < str.length used for?
// The condition index < str.length is used to ensure the loop only runs while the index is within the bounds of the string. it ensures we do not go out of the string length.