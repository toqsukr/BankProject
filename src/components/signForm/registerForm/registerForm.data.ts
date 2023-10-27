export const nameInputSetting = {
  required: 'Enter your name',
  minLength: { value: 2, message: 'Your name is too short' },
  maxLength: { value: 20, message: 'Your name is too large' },
  pattern: {
    value: /^[A-Za-z'\s-]+$/,
    message: 'Entered incorrect name'
  }
};

export const surnameInputSetting = {
  required: 'Enter your surname',
  minLength: { value: 2, message: 'Your surname is too short' },
  maxLength: { value: 30, message: 'Your surname is too large' },
  pattern: {
    value: /^[A-Za-z'\s-]+$/,
    message: 'Entered incorrect surname'
  }
};

export const dateInputSetting = {
  required: 'Enter your date of birth',
  minLength: { value: 10, message: 'Date of your birth is too short' }
};
