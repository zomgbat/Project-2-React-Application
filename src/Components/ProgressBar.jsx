import { useState, useEffect } from "react";
import axios from "axios";
import "./ProgressBar.css";

function ProgressBar() {
  const [dayCalories, setDayCalories] = useState(0);
  const [calorieProgress, setCalorieProgress] = useState(0);
  const [calorieTarget, setCalorieTarget] = useState(0);


  useEffect(() => {
    axios
        .get('http://localhost:5005/user')
        .then((response) => setCalorieTarget(response.data.caloriesGoal))
        //.then((response)=> console.log(response.data.caloriesGoal))
        .catch((error) => error)

})



  
  const updateProgressBar = (cal) => {
    setCalorieProgress((cal / calorieTarget) * 100);
  };

  const handleDecrease = () => {
    let updateCalories = dayCalories;
    updateCalories -= 100;
    if (updateCalories < 0) {
      updateCalories = 0;
    }
    setDayCalories(updateCalories);
    updateProgressBar(updateCalories);
  };

  const handleIncrease = () => {
    let updateCalories = dayCalories;
    updateCalories += 100;
    setDayCalories(updateCalories);
    updateProgressBar(updateCalories);
  };

  const handleReset = () => {
    const updateCalories = 0;
    setDayCalories(updateCalories);
    updateProgressBar(updateCalories);
  };

  const getColor = () => {
    if (dayCalories <= calorieTarget * 0.25) {
      return "#00FF00";
    } else if (dayCalories <= calorieTarget * 0.5) {
      return "#33CC33";
    } else if (dayCalories <= calorieTarget) {
      return "#FFFF00";
    } else {
      return "#FF0000";
    }
  };

  /*
      const updateProgressBar = (cal)=>{
        setCalorieProgress((cal/calorieTarget)*100)
      }
      
      const handleClick = (type)=>{
        let updateCalories = dayCalories
        switch(type) {
            case "decrease":
                updateCalories -= 100;
                if (updateCalories <0) {
                    updateCalories = 0;
                }
                break;
            case "increase":
                updateCalories += 100;
                break;
            case "reset":
                updateCalories = 0;
                break;
            default:
                break;
        }
        setDayCalories(updateCalories);
        updateProgressBar(updateCalories);
      }
  },[])
*/

  return (
    <div id="progress-bar-container">
      <div id="progress-bar">
        <div
          id="progress-bar-fill"
          style={{ width: `${calorieProgress}%`, backgroundColor: getColor() }}
        ></div>
      </div>
      <div id="progress-label">{`${dayCalories} of ${calorieTarget} cal.`}</div>
      <button onClick={() => handleDecrease()}>Decrease</button>
      <button onClick={() => handleIncrease()}>Increase</button>
      <button onClick={() => handleReset()}>Reset</button>
    </div>
  );
}
export default ProgressBar;
