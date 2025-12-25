/* 
Password Validation

Write a program that should check if a password is valid
and returns a boolean

To be valid, a password must:
- Have at least 5 characters.
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one of the following non-alphanumeric symbols: ("!", "#", "$", "%", ".", "*", "&")
- Must not be any previous password in the passwords array. 

You must breakdown this problem in order to solve it. Find one test case first and get that working
*/
const isValidPassword = require("./password-validator");

describe("Password Validator", () => {
  test("valid password returns true", () => {
    const password = "Abc1!";
    const previousPasswords = ["Test1!", "Hello2$"];

    expect(isValidPassword(password, previousPasswords)).toBe(true);
  });
  test("password with less than 5 characters is invalid", () => {
    expect(isValidPassword("A1!a")).toBe(false);
  });

  test("password without uppercase letter is invalid", () => {
    expect(isValidPassword("abc1!")).toBe(false);
  });

  test("password without lowercase letter is invalid", () => {
    expect(isValidPassword("ABC1!")).toBe(false);
  });
  // Rule 5: at least one allowed symbol
  if (!/[!#$%.*&]/.test(password)) {
    return false;
  }
});