import '../styles/BigCalendar.css'; // Make sure your CSS file is correctly imported

const Calendar = () => {
    const days = Array.from({ length: 31 }, (_, i) => i + 1); // Generate an array of 30 days
  
    return (
      <div className="big-calendar">
        {days.map(day => (
          <div key={day} className="day">{day}</div>
        ))}
      </div>
    );
  };
  
  export default Calendar;

