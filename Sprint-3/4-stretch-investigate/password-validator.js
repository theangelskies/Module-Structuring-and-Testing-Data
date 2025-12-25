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


module.exports = passwordValidator;