function passwordValidator(password, previousPasswords = []) {
  // Rule 1: at least 5 characters
  if (password.length < 5) {
    return false;
  }
  // Rule 2: at least one uppercase letter
  if (!/[A-Z]/.test(password)) {
    return false;
  }
  // Rule 3: at least one lowercase letter
  if (!/[a-z]/.test(password)) {
    return false;
  }
  // Rule 4: at least one number
  if (!/[0-9]/.test(password)) {
    return false;
  }
  // Rule 5: at least one allowed symbol
  if (!/[!#$%.*&]/.test(password)) {
    return false;
  }
  // Rule 6: must not be a previous password
  if (previousPasswords.includes(password)) {
    return false;
  }
  // If all checks pass, password is valid
  return true;
}

module.exports = passwordValidator;
