import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/DayCardPage.css";
import MealListCard from "../Components/MealListCard.jsx";
import { useParams } from "react-router-dom";

function DayCardPage() {
  const [mealsData, setMealsData] = useState(""); // Meal database array
  const [frequentMealsData, setFrequentMealsData] = useState("") // Frequent meals database array
  const [mealSearchResults, setMealSearchResults] = useState([]); // Search results array
  const [dayMeals, setDayMeals] = useState([]); // Day meals array - Kumar: This is the array that needs to be pushed to the day's "meals" arraay

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [dayCalories, setDayCalories] = useState(0); // Kumar: This is the totalCalories that needs to be pushed to the day's totalCalories

  const { date } = useParams()

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const deleteMeal = (deleteIndex, calories) => {
    const updateCalories = dayCalories-calories;
    setDayCalories(updateCalories);
    const filterArray = dayMeals.filter((meal, index) => {
      return deleteIndex != index;
    });
    setDayMeals(filterArray);
  }
  const getDay = () => {
    axios
      .get(`http://localhost:5005/days/${date}`)
      .then((response) => {
        setDayMeals(response.data.meals)
        setDayCalories(response.data.totalCalories)
      })
      .catch((error) => {
        axios
          .post('http://localhost:5005/days', { id: date, meals: dayMeals, totalCalories: dayCalories })
          .then((response) => {
            setDayMeals(response.data.meals)
          })
          .catch((error) => error)
      })
  }
  
  const addNew = (meal) => {
    setDayMeals([...dayMeals, meal]);
    setId(id + 1); // Kumar - Do we need this here?
    const updateCalories = dayCalories + meal.calories;
    setDayCalories(updateCalories)
  };
  
  const daySubmit = (e) => {
    axios
      .patch(`http://localhost:5005/days/${date}`, { meals: dayMeals, totalCalories: dayCalories })
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => error);
  }

  const getAllMeals = () => {
    
    const promise1 = axios
      .get("http://localhost:5005/meals")
      
    const promise2 = axios
        .get("http://localhost:5005/new-meals")
          
    Promise.all([promise1, promise2])
    .then((responses)=>setMealsData([...responses[0].data, ...responses[1].data]))
    .catch((error)=>error)
      }  
  

  useEffect(() => {
    getDay()
  }, [])

  useEffect(() => {
    daySubmit()
  }, [dayMeals])

  useEffect(() => {
    getAllMeals();
  }, []);

  useEffect(() => {
    setId(mealsData.length);
  }, [mealsData]);

  return (
    <>
    <div className="completeCard"> {/*Kumar - this should be kebab-case*/ }
      <h2>Day Card Page</h2>
      <p className="todayMeal">Today you ate:</p>{" "}
      <p className="todayMeal">{`${dayCalories} calories`}</p>
      <div id="meal-card-container">
        {dayMeals.map((meal, index) => {
          return (
            <MealListCard key={index} index={index} meal={meal} deleteMeal={deleteMeal} />
          );
        })}
      </div>
      <p className="searchMeal">Search here your meal:</p>{" "}
      
      {/*Kumar - this should be kebab-case*/ }
      <input
        className="searchBar" 
        type="text"
        onChange={(event) => {
          if (event.target.value.length === 0) {
            setMealSearchResults([]);
          } else {
            const filterArray = mealsData.filter((meal) => {
              return meal.name.toUpperCase().includes(event.target.value.toUpperCase());
            });
            setMealSearchResults(filterArray);
          }
        }}
      />
      {mealSearchResults.map((meal) => {
        return (
          <img className="searchImg" 
            onClick={() => {
              addNew(meal);
            }}
            src={meal.img}
            alt={meal.name}
            key={meal.id}
          />
        );
      })}
      <form className="form" onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Calories:</label>
        <input
          type="number"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
        />
        <label>Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Img:</label>
        <input
          type="text"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
        <button
          className="btn"
          type="submit"
          onClick={() => {
            addNew({ name, calories, description, img });
          }}
        >
          {" "}
          Add quick meal
        </button>
      </form>
      </div>
    </>
  );
}

export default DayCardPage;
