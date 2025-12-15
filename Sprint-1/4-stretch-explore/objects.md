## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
ƒ log() { [native code] }
console.log is a function that you can call to print messages to the console.
[native code] means this function is built into the browser (the V8 engine), not something you defined in JavaScript.

Now enter just `console` in the Console, what output do you get back?
{log: ƒ, warn: ƒ, error: ƒ, info: ƒ, assert: ƒ, ...}
console is an object provided by the browser that has many methods (functions) for logging, debugging, and inspecting code.
Methods like log, warn, error, assert are functions stored as properties on the console object.

Try also entering `typeof console`
"object"
console is an object.

Answer the following questions:

What does `console` store?
console stores an object that has many methods (functions) for interacting with the browser’s debugging console.

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
. is the dot operator, used to access a property or method of an object.
console.log → accesses the log function of the console object.
console.assert → accesses the assert function of the console object.
