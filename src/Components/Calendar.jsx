import '../styles/Calendar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Calendar() {
  const [today, setToday] = useState(new Date());
  const [month, setMonth] = useState(today.getMonth())
  const [year, setYear] = useState(today.getFullYear());
  const [date, setDate] = useState(today.getDate());
  const [monthDays, setMonthDays] = useState(new Date(year, month, 0).getDate());
  const [firstDay, setFirstDay] = useState(new Date(year, month, 0).getDay())
  const blanksArray = []


  for (let i = 0; i <= firstDay; i++) {
    blanksArray.push('')
  }

  const changeMonth = (action) => {
    let newMonth = action === "minus" ? month - 1 : month + 1;
    setMonth(newMonth)
    setToday(new Date(year, newMonth))
    setMonthDays(new Date(year, newMonth + 1, 0).getDate())
    setFirstDay(new Date(year, newMonth, 0).getDay())
  }
  let days = []
  for (let i = 0; i < monthDays; i++) {
    days.push(i + 1)
  }
  return (
    <>
      <div id="month-bar">
        <button onClick={() => changeMonth("minus")}> Prev</button>
        <h2> {today.toLocaleString('en-EN', { month: 'long' })} </h2>
        <h2> {today.getFullYear()} </h2>
        <button onClick={() => changeMonth("plus")}>Next</button>
      </div>


      <div className="calendar">
        <div className='weekday'> Sun </div>
        <div className='weekday'> Mon</div>
        <div className='weekday'> Tue</div>
        <div className='weekday'> Wed </div>
        <div className='weekday'> Thu</div>
        <div className='weekday'> Fri</div>
        <div className="weekday"> Sat</div>

        {blanksArray.map((day, index) => (
          <div key={index} className="blank"></div>
        ))}

        {days.map(day => (
          <Link className="day" key={day} to={`/day/${year}-${String(month+1).padStart(2, '0')}-${String(day).padStart(2,'0')}`}>
            <div>{day}</div>
          </Link>
        ))}
      </div>
    </>
  );

}

/* const getDaysInMonth = monthMoment => {
  const monthCopy = monthMoment.clone();
  monthCopy.startOf('month');

let days = [];

while (monthCopy.month()=== monthMoment.month()){
  days.push(monthCopy.clone());
  monthCopy.add(1,'days');
}

return days; */

/* 
const segmentIntoWeeks = dayMoments => {
  let weeks = [];
  let currentWeek = [];

  for (let day of dayMoments) {
    currentWeek.push(day.clone());

    if (day.format('dddd') === 'Sat') {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  }

  if (currentWeek.length > 0) {
    weeks.push(currentWeek);
  }
  return weeks;
} */

/* const padWeekFront = (week, padWith = null) => {
  return [...Array(7 - week.length).fill(padWith), ...week]
}

const padWeekBack = (week, padWith = null) => {
  return [...week, ...Array(7 - week.length).fill(padWith)]
}

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const Calendar = () => {

  const today = moment()
  const [currentMonthMoment, setCurrentMonthMoment] = useState(today);
  const week = segmentIntoWeeks(getDaysInMonth(currentMonthMoment))
  const incrementMonth = () => {
    setCurrentMonthMoment(moment(currentMonthMoment.add(1, 'months')))
  }

  const decrementMonth = () => {
    setCurrentMonthMoment(moment(currentMonthMoment.subtract(1, 'months')))
  }

  return (
    <>
      <h2>{currentMonthMoment.format('MMMM YYYY')}</h2>
      <button onClick={incrementMonth}> next </button>
      <button onClick={decrementMonth}> prev </button>
      <table>
        <thead>
          <tr> {daysOfWeek.map(day => <th>{key = { day }}</th>)}</tr>
        </thead>
        <tbody>
          {weeks.map((week, i) => {
            const displayWeek = i === 0
              ? padWeekFront(week)
              : i === weeks.length - 1
                ? padWeekBack(week)
                : week;

            return (
              <tr key={i}>
                {displayWeek.map((dayMoments, j) => dayMoments
                  ? <td key={dayMoments.format('D')}> {dayMoments.format('D')}</td>
                  : <td key={`${i}${j}`}></td>)}
              </tr>
            );
          })}
        </tbody>
      </table>

    </>
  )
};

/*   const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate(); 

  let days = []
  for (let i = 0; i < 31; i++) {
    days.push(i + 1)
  }

  return (
    <div className="calendar">
       <>{let actualDate= `${month}/${date}/${year}`}</> 
      {days.map(day => (
        <div key={day} className="day">{day}</div>
      ))}
    </div>
  );  */

export default Calendar;

