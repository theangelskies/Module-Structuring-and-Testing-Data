const getAngleType = require("./1-get-angle-type");

test("should identify right angle (90°)", () => {
  expect(getAngleType(90)).toEqual("Right angle");
});

// REPLACE the comments with the tests
// make your test descriptions as clear and readable as possible

// Case 2: Identify Acute Angles:
test("should identify acute angle (less than 90°)", () => {
  expect(getAngleType(45)).toEqual("Acute angle");
});


// Case 3: Identify Obtuse Angles:
test("should identify obtuse angle (greater than 90° and less than 180°)", () => {
  expect(getAngleType(120)).toEqual("Obtuse angle");
});
// Case 4: Identify Straight Angles:
test("should identify straight angle (180°)", () => {
  expect(getAngleType(180)).toEqual("Straight angle");
});

// Case 5: Identify Reflex Angles:
test("should identify reflex angle (between 180° and 360°)", () => {
  expect(getAngleType(270)).toEqual("Reflex angle");
});
