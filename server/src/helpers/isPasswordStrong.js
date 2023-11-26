const isStrongPassword = (password) => {
  // Check for length between 8 and 16 characters
  if (password.length < 8 || password.length > 16) {
    return false;
  }

  // Check for at least one uppercase letter
  if (!/[A-Z]/.test(password)) {
    return false;
  }

  // Check for at least one lowercase letter
  if (!/[a-z]/.test(password)) {
    return false;
  }

  // Check for at least one number
  if (!/\d/.test(password)) {
    return false;
  }

  // Check for at least one symbol (non-alphanumeric character)
  if (!/[^a-zA-Z0-9]/.test(password)) {
    return false;
  }

  // If all criteria are met, return true
  return true;
};

export default isStrongPassword;
