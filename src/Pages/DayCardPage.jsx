import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/DayCardPage.css";
import MealListCard from "../Components/MealListCard.jsx";
import ProgressBar from "../Components/ProgressBar.jsx";

function DayCardPage() {
  const [mealsData, setMealsData] = useState(""); // Meal database array
  const [frequentMealsData, setFrequentMealsData] = useState(""); // Frequent meals database array
  const [mealSearchResults, setMealSearchResults] = useState([]); // Search results array
  const [dayMeals, setDayMeals] = useState([]); // Day meals array - Kumar: This is the array that needs to be pushed to the day's "meals" arraay

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [dayCalories, setDayCalories] = useState(0); // Kumar: This is the totalCalories that needs to be pushed to the day's totalCalories

  const [showForm, setShowForm] = useState(false);

  const { date } = useParams();

  // const toggleForm = (event)=>{
  //   setShowForm(!showForm);
  // }

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const deleteMeal = (deleteIndex, calories) => {
    const updateCalories = dayCalories - calories;
    setDayCalories(updateCalories);
    const filterArray = dayMeals.filter((meal, index) => {
      return deleteIndex != index;
    });
    setDayMeals(filterArray);
  };
  const getDay = () => {
    axios
      .get(`http://localhost:5005/days/${date}`)
      .then((response) => {
        setDayMeals(response.data.meals);
        setDayCalories(response.data.totalCalories);
      })
      .catch((error) => {
        axios
          .post("http://localhost:5005/days", {
            id: date,
            meals: dayMeals,
            totalCalories: dayCalories,
          })
          .then((response) => {
            setDayMeals(response.data.meals);
          })
          .catch((error) => error);
      });
  };

  const addQuickMeal = (meal) => {
    if (name === "") {
      window.alert("Please enter a meal name");
      return;
    }

    if (calories === "") {
      window.alert("Please enter a calorie amount");
      return;
    }

    if (img === "") {
      meal.img = "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
    }

    if (description === "") {
      meal.description ="Just something I found lying around";
    }
    addNew(meal);

  }
  const addNew = (meal) => {
    

    setDayMeals([...dayMeals, meal]);
    setId(id + 1); // Kumar - Do we need this here?
    const updateCalories = dayCalories + meal.calories;
    setDayCalories(updateCalories);

    setName("");
    setCalories(""); // Reset to an empty string to match the initial state
    setDescription("");
    setImg("");
  };

  const daySubmit = (e) => {
    axios
      .patch(`http://localhost:5005/days/${date}`, {
        meals: dayMeals,
        totalCalories: dayCalories,
      })
      .then((response) => {
        //console.log(response.data);
      })
      .catch((error) => error);
  };

  const getAllMeals = () => {
    const promise1 = axios.get("http://localhost:5005/meals");

    const promise2 = axios.get("http://localhost:5005/frequent-meals");

    Promise.all([promise1, promise2])
      .then((responses) =>
        setMealsData([...responses[0].data, ...responses[1].data])
      )
      .catch((error) => error);
  };

  useEffect(() => {
    getDay();
  }, []);

  useEffect(() => {
    daySubmit();
  }, [dayMeals]);

  useEffect(() => {
    getAllMeals();
  }, []);

  useEffect(() => {
    setId(mealsData.length);
  }, [mealsData]);

  return (
    <>
      <ProgressBar dayCalories = {dayCalories}/>
      <div className="complete-card">
        {" "}
        {/*Kumar - this should be kebab-case*/}
        <h2>Day Card Page</h2>
        <p className="today-meal">Today you ate:</p>{" "}
        <p className="today-meal">{`${dayCalories} calories`}</p>
        <div id="meal-card-container">
          {dayMeals.map((meal, index) => {
            return (
              <MealListCard
                key={index}
                index={index}
                meal={meal}
                deleteMeal={deleteMeal}
              />
            );
          })}
        </div>
        <p className="search-meal">Search meals:</p>{" "}
        {/*Kumar - this should be kebab-case*/}
        <input
          className="search-bar"
          type="text"
          onChange={(event) => {
            if (event.target.value.length === 0) {
              setMealSearchResults([]);
            } else {
              const filterArray = mealsData.filter((meal) => {
                return meal.name
                  .toUpperCase()
                  .includes(event.target.value.toUpperCase());
              });
              setMealSearchResults(filterArray);
            }
          }}
        />
        {mealSearchResults.map((meal) => {
          return (
            <img
              className="search-img"
              onClick={() => {
                addNew(meal);
              }}
              src={meal.img}
              alt={meal.name}
              key={meal.id}
            />
          );
        })}
        { showForm ? (
            <form className="quick-meal-form" onSubmit={handleSubmit}>
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
                onChange={(e) => setCalories(Number(e.target.value))}
              />
              <label>Description:</label>
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <label>Photo URL:</label>
              <input
                type="text"
                value={img}
                onChange={(e) => setImg(e.target.value)}
              />
              <button
                className="btn"
                type="submit"
                onClick={() => {
                  addQuickMeal({ name, calories, description, img });
                }}
              >
                Add quick meal
              </button>
            <button className="btn" onClick={()=>console.log(setShowForm(!showForm))}>Close Form</button>
            </form>

          ) : (
            <div className="quick-meal-form">
            <button className="btn" onClick={()=>console.log(setShowForm(!showForm))}>Add New Meal</button>
            </div>
          )
        }
      </div>
    </>
  );
}

export default DayCardPage;
