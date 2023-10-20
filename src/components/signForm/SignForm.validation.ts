export const handleChange = (value: string) => {
  const phoneNumber = value.replace(/\D/g, '');
  if (phoneNumber.length >= 10) {
    return `+${phoneNumber[0]} ${phoneNumber.substring(1, 4)} ${phoneNumber.substring(
      4,
      7
    )}-${phoneNumber.substring(7, 9)}-${phoneNumber.substring(9, 11)}`;
  }
  if (phoneNumber.length >= 8) {
    return `+${phoneNumber[0]} ${phoneNumber.substring(1, 4)} ${phoneNumber.substring(
      4,
      7
    )}-${phoneNumber.substring(7, 9)}`;
  }
  if (phoneNumber.length >= 5) {
    return `+${phoneNumber[0]} ${phoneNumber.substring(1, 4)} ${phoneNumber.substring(4, 7)}`;
  }
  if (phoneNumber.length >= 2) {
    return `+${phoneNumber[0]} ${phoneNumber.substring(1, 4)}`;
  }
  if (phoneNumber.length >= 1) {
    return `+${phoneNumber[0]}`;
  }
  return phoneNumber;
};
