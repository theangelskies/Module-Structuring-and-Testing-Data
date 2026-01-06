Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;

What effect does calling the `alert` function have?
Calling alert("Hello world!") opens a small modal dialog box in the browser with the message "Hello world!". The dialog has an OK button that the user must click to continue interacting with the page.



Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.
let myName = prompt("What is your name?");
console.log(myName); 

What effect does calling the `prompt` function have?
Calling prompt("What is your name?") opens a modal input dialog box in the browser. This dialog displays the message "What is your name?" and provides a text input field where the user can type something, plus OK and Cancel buttons.

What is the return value of `prompt`?
If the user types a value and clicks OK, prompt returns the string the user typed.
If the user clicks Cancel, prompt returns null.
