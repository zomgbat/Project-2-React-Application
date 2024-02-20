import '../styles/Calendar.css'; 

const Calendar = () => {
  let days = []
  for (let i = 0; i < 31; i++) {
    days.push(i + 1)
  }

  return (
    <div className="calendar">
      {days.map(day => (
        <div key={day} className="day">{day}</div>
      ))}
    </div>
  );
};

export default Calendar;

