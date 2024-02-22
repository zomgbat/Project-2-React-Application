import '../styles/DashboardPage.css'
import { useNavigate } from 'react-router-dom';
import ProgressBar from '../Components/ProgressBar.jsx';
import Calendar from '../Components/Calendar';
import { useEffect, useState } from 'react';
import axios from 'axios';

function DashboardPage() {

  const today = new Date();
  const date = today.getFullYear() + '-' + (today.getMonth() + 1).toString().padStart(2, '0') + '-' + today.getDate().toString().padStart(2, '0');
  console.log(date);
  const [dayCalories, setDayCalories] = useState(0);

  const createNewDay = () => {
    axios
      .post('http://localhost:5005/days', { id: date, meals: [], totalCalories: dayCalories })
      .then((response) => {
        setDayMeals(response.data.meals)
      })
      .catch((error) => error)
   }

  const getDay = () => {
    axios
      .get(`http://localhost:5005/days/${date}`)
      .then((response) => {
        console.log(response.data.totalCalories);
        setDayCalories(response.data.totalCalories)
      })
      .catch((error) => {
        createNewDay()
      })
  }

  useEffect(() => {
    getDay();

  }, [])

  return (
    <div >
      <ProgressBar dayCalories={dayCalories} />
      <Calendar />
    </div>

  )
}

export default DashboardPage;