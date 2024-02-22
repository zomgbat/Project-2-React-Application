import "../styles/Calendar.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Calendar(props) {
  const [today, setToday] = useState(new Date());
  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());
  const [monthDays, setMonthDays] = useState(
    new Date(year, month, 0).getDate()
  );
  const [firstDay, setFirstDay] = useState(new Date(year, month, 0).getDay());
  const [dayCaloriesArray, setDayCaloriesArray] = useState([]);
  const calorieTarget = props.calorieTarget;
  let calorieTargetMet = false;

  const blanksArray = [];

  for (let i = 0; i <= firstDay; i++) {
    blanksArray.push("");
  }

  const changeMonth = (action) => {
    let newMonth = action === "minus" ? month - 1 : month + 1;
    setMonth(newMonth);
    setToday(new Date(year, newMonth));
    setMonthDays(new Date(year, newMonth + 1, 0).getDate());
    setFirstDay(new Date(year, newMonth, 0).getDay());
  };

  let days = [];
  for (let i = 0; i < monthDays; i++) {
    days.push(i + 1);
  }

  const formatDate = (day) => {
    return `${year}-${String(month + 1).padStart(2, "0")}-${String(
      day
    ).padStart(2, "0")}`;
  };

  const checkCalorieData = (day) => {
    const dayCalories = dayCaloriesArray.find((element) => element.id === day);
    if (dayCalories) {
      if (dayCalories) {
        if (dayCalories.totalCalories < calorieTarget) {
          calorieTargetMet = true;
        } else {
          calorieTargetMet = false;
        }
        return true;
      } else {
        return false;
      }
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:5005/days")
      .then((response) => {
        setDayCaloriesArray([...response.data]);
      })

      .catch((error) => error);
  }, []);

  return (
    <>
      <div id="month-bar">
        <button onClick={() => changeMonth("minus")}> Prev</button>
        <h2> {today.toLocaleString("en-EN", { month: "long" })} </h2>
        <h2> {today.getFullYear()} </h2>
        <button onClick={() => changeMonth("plus")}>Next</button>
      </div>

      <div className="calendar">
        <div className="weekday"> Sun </div>
        <div className="weekday"> Mon</div>
        <div className="weekday"> Tue</div>
        <div className="weekday"> Wed </div>
        <div className="weekday"> Thu</div>
        <div className="weekday"> Fri</div>
        <div className="weekday"> Sat</div>

        {blanksArray.map((day, index) => (
          <div key={index} className="blank"></div>
        ))}

        {days.map((day) => (
          <Link key={day} to={`/day/${formatDate(day)}`}>
            <div className="day">
              {checkCalorieData(formatDate(day)) &&
                (calorieTargetMet ? (
                  <img
                    id="tomato-indicator"
                    src="src/assets/tomatogreen.png"
                    alt="tomato"
                  />
                ) : (
                  <img
                    id="tomato-indicator"
                    src="src/assets/tomatored.png"
                    alt="tomato"
                  />
                ))}
              <p
                className={
                  checkCalorieData(formatDate(day))
                    ? "day-link-highlight"
                    : "day-link"
                }
              >
                {day}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Calendar;
