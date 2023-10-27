interface IDateOption {
  label: string;
  value: string;
}

const Monthes: { [key: string]: string } = {
  January: '01',
  February: '02',
  March: '03',
  April: '04',
  May: '05',
  June: '06',
  July: '07',
  August: '08',
  September: '09',
  October: '10',
  November: '11',
  December: '12'
} as const;

const dayOptions = generateDayOptions();

const monthOptions = generateMonthOptions();

const yearOptions = generateYearOptions();

function generateDayOptions(): IDateOption[] {
  const days = [];
  for (let day = 1; day < 32; day++) {
    days.push({ label: day.toString(), value: day.toString() });
  }
  return days;
}

function generateMonthOptions(): IDateOption[] {
  const monthes = [];
  for (const month in Monthes) {
    monthes.push({ label: month, value: Monthes[month] });
  }
  return monthes;
}

function generateYearOptions(): IDateOption[] {
  const currentYear = new Date().getFullYear() - 18;
  const startYear = currentYear - 100;
  const years = [];
  for (let year = startYear; year <= currentYear; year++) {
    years.push({ label: year.toString(), value: year.toString() });
  }
  return years;
}
