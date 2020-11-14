import validator from "validator";
/** Handle form validation for the signup form
 * @param email - user's email
 * @param password - user's chsoen password
 */
export const validateForm = (
  email: string,
  password: string,
  setError: (error: string | null) => void
): boolean => {
  // Check for invalid email
  if (!validator.isEmail(email)) {
    setError("Please enter a valid email address.");
    return false;
  }
  // check if password field is empty
  if (!password) {
    setError("Please enter a valid password.");
    return false;
  }
  return true;
};
