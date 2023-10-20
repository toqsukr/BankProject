export const passwordInputSetting = {
  required: 'Enter your password',
  minLength: { value: 8, message: 'Your password is too short' },
  pattern: {
    value: /^(?=.*\d)(?=.*[A-Z])(?=.*[\W_]).{8,}$/,
    message: 'The password must contain capital letters, numbers and special characters'
  }
};
