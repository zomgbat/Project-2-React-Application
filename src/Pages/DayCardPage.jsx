import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/DayCardPage.css";
import MealListCard from "../Components/MealListCard.jsx";

function DayCardPage() {
  const [mealsData, setMealsData] = useState(""); // Meal database array
  const [mealSearchResults, setMealSearchResults] = useState([]); // Search results array
  const [dayMeals, setDayMeals] = useState([]); // Day meals array - Kumar: This is the array that needs to be pushed to the day's "meals" arraay

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [dayCalories, setDayCalories]=useState(0); // Kumar: This is the totalCalories that needs to be pushed to the day's totalCalories

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

  const addNew = (meal) => {
    setDayMeals([...dayMeals, meal]);
    setId(id + 1); // Kumar - Do we need this here?
    const updateCalories = dayCalories+meal.calories;
    setDayCalories(updateCalories)
  };

  const getAllMeals = () => {
    axios
      .get("http://localhost:5005/meals")
      .then((response) => setMealsData(response.data))
      .catch((error) => error);
  };

  useEffect(() => {
    getAllMeals();
  }, []);
  useEffect(() => {
    setId(mealsData.length);
  }, [mealsData]);

  return (
    <>
      <h1>Day Card Page</h1>
      <p className="todayMeal">Today you ate:</p>{" "}
      {/* className used to be todayMeat*/}
      <p className="todayMeal">{`${dayCalories} calories`}</p>
      <div id="meal-card-container">
        {dayMeals.map((meal, index) => {
          // Day meal cards go here
          //return <img width={"80px"} src={meal.img} key={meal.id} alt={meal.name}/> // Display only the meal image
          return (
            <MealListCard key={index} index={index} meal={meal} deleteMeal={deleteMeal} />
          );
        })}
      </div>
      <p className="searchMeal">Search here your meal:</p>{" "}
      {/* className used to be searchMeat*/}
      <input
        className="searchBar"
        type="text"
        onChange={(event) => {
          if (event.target.value.length === 0) {
            setMealSearchResults([]);
          } else {
            const filterArray = mealsData.filter((meal) => {
              //return meal.name.includes(event.target.value); // Case sensitive
              return meal.name.toUpperCase().includes(event.target.value.toUpperCase()); // Case insensitive
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
          type="submit"
          onClick={() => {
            addNew({ name, calories, description, img });
          }}
        >
          {" "}
          Add quick meal
        </button>
        <button
          className="btn"
          type="submit"
          onClick={() => {
            addNew({ name, calories, description, img });
          }}
        >
          {" "}
          Add frequent meal
        </button>
      </form>
    </>
  );
}

export default DayCardPage;
