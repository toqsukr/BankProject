export const handleNameChange = (name: string) => name.replace(/[^A-Za-z\s'-]/g, '');

export const handleDateChange = (dateString: string) => {
  const date = dateString.replace(/\D/g, '');
  const day = date.slice(0, 2);
  if (date.length > 4) return `${day}.${date.slice(2, 4)}.${date.slice(4, 8)}`;
  if (date.length > 2) return `${date.slice(0, 2)}.${date.slice(2, 4)}`;
  return date;
};
