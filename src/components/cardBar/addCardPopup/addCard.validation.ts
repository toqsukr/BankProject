export const cardNumberValidation = (cardNumber: string) =>
  cardNumber
    .replace(/\D/g, '')
    .replace(/(\d{4})(?=\d)/g, '$1 ')
    .slice(0, 19);

export const expiresValidation = (value: string) => {
  const expires = value.replace(/\D/g, '').slice(0, 5);
  const month =
    (parseInt(expires.slice(0, 2)) === 0 && expires.length > 1) ||
    (parseInt(expires.slice(0, 2)) > 12 && expires.length > 1)
      ? '01'
      : expires.slice(0, 2);

  if (expires.length > 2) {
    const year = parseInt(expires.slice(2, 4)) < 23 && expires.length === 4 ? '23' : expires.slice(2, 4);
    return `${month}/${year}`;
  }
  return expires;
};

export const codeValidation = (code: string) => code.toString().replace(/\D/g, '').slice(0, 3);

export const nameValidation = (name: string) =>
  name
    .replace(/[^a-zA-Z\s]/g, '')
    .toUpperCase()
    .slice(0, 20);

export const nameInputSetting = {
  required: 'Enter your name',
  minLength: { value: 5, message: 'Your name is too short' }
};

export const expiresInputSetting = {
  required: 'Enter your expires',
  minLength: { value: 5, message: 'Expires is too short' }
};

export const cardNumberInputSetting = {
  required: 'Enter your card number',
  minLength: { value: 19, message: 'Card number is too short' }
};

export const codeInputSetting = {
  required: 'Enter your password',
  minLength: { value: 3, message: 'Code is too short' }
};
