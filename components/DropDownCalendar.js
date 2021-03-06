import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import '../css/DropDownCalendar.css';
import  triangle  from '../images/triangle.svg';

const currentYear = new Date().getFullYear();
const fromMonth = new Date(currentYear, 0);
const toMonth = new Date(currentYear + 10, 11);

function YearMonthForm({ date, localeUtils, onChange }) {
  const months = localeUtils.getMonths();
  months.map((element, index) => months[index] = element.slice(0,3).toUpperCase())
  

  const years = [];
  for (let i = fromMonth.getFullYear(); i <= toMonth.getFullYear(); i += 1) {
    years.push(i);
  }

  const handleChange = function handleChange(e) {
    const { year, month } = e.target.form;
    onChange(new Date(year.value, month.value));
  };

  return (
    <form className="DayPicker-Caption">
      <select className="dateChooser monthDayDropDown" name="month" onChange={handleChange} value={date.getMonth()}>
        {months.map((month, i) => (
          <option key={month} value={i}>
            {month}
          </option>
        ))}
      </select>

      <span>&bull;</span>

      <select id="yearDropDown" className="dateChooser monthDayDropDown" name="year" onChange={handleChange} value={date.getFullYear()}>
        {years.map(year => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
      <span><img className="downArrow" src={triangle}/></span>
    </form>
    
  );
}

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.handleYearMonthChange = this.handleYearMonthChange.bind(this);
    this.state = {
      month: fromMonth,
    };
    console.log(YearMonthForm.months)
  }

  handleYearMonthChange(month) {
    this.setState({ month });
  }

  render() {
    return (
      <div className="YearNavigation">
        <DayPicker 
        
          className="DayPicker--interactionEnabled"
          month={this.state.month}
          fromMonth={fromMonth}
          toMonth={toMonth}
          captionElement={({ date, localeUtils }) => (
            <YearMonthForm
              date={date}
              localeUtils={localeUtils}
              onChange={this.handleYearMonthChange}
            />
          )}
        />
      </div>
    );
  }
}

/* <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */