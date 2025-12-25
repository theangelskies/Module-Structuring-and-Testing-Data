// Validates whether a credit card number meets specific rules
// @param {string} cardNumber - The credit card number to validate
// @returns {boolean} - true if valid, false if invalid
 
function isValidCreditCard(cardNumber) {
  // Rule 1: Must be exactly 16 digits and contain only numbers
  if (!/^\d{16}$/.test(cardNumber)) {
    return false;
  }

  // If all rules pass, the credit card number is valid
  return true;
}



  /* ---------- Test cases ---------- */
console.log(isValidCreditCard("9999777788880000")); // true
console.log(isValidCreditCard("999777788880000")); // false (15 digits)


module.exports = isValidCreditCard;
