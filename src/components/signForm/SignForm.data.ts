export const phoneInputSetting = {
  required: 'Enter your phone number',
  minLength: { value: 16, message: 'Phone number is too short' },
  pattern: {
    value: /^(\+\d{1,2} )?(\d{1} )?\d{3} \d{3}-\d{2}-\d{2}$/,
    message: 'Incorrect phone number format'
  }
};
