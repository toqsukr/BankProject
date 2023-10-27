import { useState } from 'react';
import Select from 'react-select';
import css from './datePicker.module.css';

const DatePicker = () => {
  const [selectedDay, setSelectedDay] = useState('1');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('2000');

  function handleDayChange(newValue: any) {
    setSelectedDay(newValue.value);
  }

  function handleMonthChange(newValue: any) {
    setSelectedMonth(newValue.value);
  }

  function handleYearChange(newValue: any) {
    setSelectedYear(newValue.value);
  }

  return (
    <div className={css.datePicker}>
      <Select value={selectedDay} onChange={handleDayChange} placeholder='Select Day' />
      <Select value={selectedMonth} onChange={handleMonthChange} placeholder='Select Month' />
      <Select value={selectedYear} onChange={handleYearChange} placeholder='Select Year' />
    </div>
  );
};

export default DatePicker;
