function passwordValidator(password, previousPasswords = []) {
  // Rule 1: at least 5 characters
  if (password.length < 5) {
    return false;
  }
  // Rule 2: at least one uppercase letter
  if (!/[A-Z]/.test(password)) {
    return false;
  }

  // If all checks pass, password is valid
  return true;
}
  // Rule 3: at least one lowercase letter
  if (!/[a-z]/.test(password)) {
    return false;
  }
  // Rule 4: at least one number
  if (!/[0-9]/.test(password)) {
    return false;
  }
module.exports = passwordValidator;