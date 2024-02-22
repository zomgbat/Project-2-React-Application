import '../styles/DashboardPage.css'
import { useNavigate } from 'react-router-dom';
import ProgressBar from '../Components/ProgressBar.jsx';
import Calendar from '../Components/Calendar'; 
import { useEffect, useState } from 'react';
import axios from 'axios';

function DashboardPage() {
  const [calorieTarget, setCalorieTarget] = useState(0);

  
  const today = new Date();
  const date = today.getFullYear()+'-'+(today.getMonth()+1).toString().padStart(2, '0')+'-'+today.getDate().toString().padStart(2, '0');
  
  const [dayCalories, setDayCalories] = useState(0);
  
  const getDay = () => {
    axios
    .get(`http://localhost:5005/days/${date}`)
    .then((response) => {
      setDayCalories(response.data.totalCalories)
    })
    .catch((error) => {
      
      
      // REFACTOR 👇 
      axios
      .post('http://localhost:5005/days', { id: date, meals: [], totalCalories: dayCalories })
      .then((response) => {
        setDayMeals(response.data.meals)
      })
      .catch((error) => error)
    })
  }
  
  const navigate = useNavigate()
  
  useEffect(() => {
    getDay();
    
  },[]) 

  useEffect(() => {
    axios
      .get("http://localhost:5005/user")
      .then((response) => {
        setCalorieTarget(response.data.caloriesGoal);

        updateProgressBar(Number(props.dayCalories));
        
      })
      
      .catch((error) => error);
  }, [dayCalories]);
  
  return (
    <div >
            <ProgressBar calorieTarget = {calorieTarget} dayCalories = {dayCalories}/>
            <Calendar calorieTarget = {calorieTarget} dayCalories = {dayCalories}/>
        </div>

    )
}

export default DashboardPage;