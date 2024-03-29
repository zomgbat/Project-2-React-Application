import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/ProgressBar.css";

function ProgressBar(props) {

  const [calorieTarget, setCalorieTarget] = useState(0);
  const [calorieProgress, setCalorieProgress] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:5005/user")
      .then((response) => {
        setCalorieTarget(response.data.caloriesGoal);

        updateProgressBar(Number(props.dayCalories));
        
      })
      
      .catch((error) => error);
  }, [props.dayCalories]);

  const getColor = () => {
    if (calorieProgress < 60) {
      return "#66734f";
    } else if (calorieProgress < 70) {
      return "#a9b204";
    } else if (calorieProgress < 95) {
      return "#a9b204";
    } else if (calorieProgress > 1600) {
      return "#9a0d01"
    } else {
      return "#9a0d01";
    }
  };

  const updateProgressBar = (cal) => {
    cal === 0? setCalorieProgress(0) : setCalorieProgress((cal / calorieTarget) * 100);
  };


  return (
    <div id="progress-bar-container">
      <div id="progress-bar">
        <div
          id="progress-bar-fill"
          style={{ width: `${calorieProgress}%`, backgroundColor: getColor() }}
        ></div>
      </div>
      <div id="progress-label">{`${props.dayCalories} of ${calorieTarget} cal.`}</div>

      {/* Debug buttons to test functionality
      <button onClick={() => handleDecrease()}>Decrease</button>
      <button onClick={() => handleIncrease()}>Increase</button>
  <button onClick={() => handleReset()}>Reset</button> */}
    </div>
  );
}
export default ProgressBar;
