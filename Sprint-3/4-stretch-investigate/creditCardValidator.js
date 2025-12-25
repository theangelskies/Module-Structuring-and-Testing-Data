// Validates whether a credit card number meets specific rules
// @param {string} cardNumber - The credit card number to validate
// @returns {boolean} - true if valid, false if invalid
 
function isValidCreditCard(cardNumber) {
  // Rule 1: Must be exactly 16 digits and contain only numbers
  if (!/^\d{16}$/.test(cardNumber)) {
    return false;
  }

  // Rule 2: Must contain at least two different digits
  const uniqueDigits = new Set(cardNumber);
  if (uniqueDigits.size < 2) {
    return false;
  }
  // Rule 3: Final digit must be even
  const lastDigit = Number(cardNumber[cardNumber.length - 1]);
  if (lastDigit % 2 !== 0) {
    return false;
  }

  // If all rules pass, the credit card number is valid
  return true;
}



  /* ---------- Test cases ---------- */
console.log(isValidCreditCard("9999777788880000")); // true
console.log(isValidCreditCard("999777788880000")); // false (15 digits)
console.log(isValidCreditCard("4444444444444444")); // false (only one type of digit)
console.log(isValidCreditCard("a92332119c011112")); // false (contains non-numeric characters)
console.log(isValidCreditCard("6666666666666661"));// false (final digit is odd)

module.exports = isValidCreditCard;
