
import { useState, useEffect } from "react";
import '../styles/CustomMealPage.css'
import axios from "axios";


const API_URL = "http://localhost:5005/frequent-meals";

function CustomMealPage() {
  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");

  const [meals, setMeals] = useState([]);
  
  const getAllMeals = () => {

    axios
      .get(`${API_URL}`)
      .then((response) => setMeals(response.data))
      .catch((error) => console.log(error));
  };



  useEffect(() => {
    getAllMeals();
  }, []);


  const handleSubmit = (event) => {
    event.preventDefault();

    if (name === "") {
      window.alert("Please enter a meal name")
      return;
    }

    if (calories === "") {
      window.alert("Please enter a calorie amount");
      return;
    }

    

    const newMeal = { name, calories: Number(calories), description, img };
    if (newMeal.img === "") {
      newMeal.img = "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
    }

    if (newMeal.description === "") {
      newMeal.description ="Just something I found lying around";
    }

    axios
      .post(`${API_URL}`, newMeal)
      .then((response) => {
        console.log(response);
        // Reset the form fields using the state setter functions
        setName("");
        setCalories(""); // Reset to an empty string to match the initial state
        setDescription("");
        setImg("");
        getAllMeals();

      })
      .catch((error) => console.log(error));
  };

  const handleDelete = (id) => {
    axios
        .delete(`${API_URL}/${id}`)
        .then((response) => {
            console.log(response);
            getAllMeals()
        })
        .catch((error) => console.log(error));
  }

  return (
    <>
      <div >
        <form className="form-container" onSubmit={handleSubmit}>
          <span className="titleMeal">Add a Frequent Meal</span>

          <label >
            Meal Name
            <input value={name} onChange={(event) => { setName(event.target.value) }} id="setName" type="text" />
          </label>

          <label>
            Calories
            <input value={calories} onChange={(event) => { setCalories(event.target.value) }} id="setCalories" type="number" />
          </label>

          <label>
            Photo
            <input value={img} onChange={(event) => { setImg(event.target.value) }} id="setImg" type="url" />
          </label>

          <label>
            Description
            <textarea value={description} onChange={(event) => { setDescription(event.target.value) }} id="setDescription" cols="20" rows="5"></textarea>
          </label>
          {/* <label>
            Description
            <input value={description} onChange={(event) => { setDescription(event.target.value) }} id="setDescription" type="text" />
          </label> */}

          <div className="moveBtn">
            <button className='addNewButton' type="submit">Add Frequent Meal</button>
          </div>

        </form>

        {meals.map((meal) => {
          return (
            <div className="all-meals-section" key={meal.id} >
              <h3>{meal.name}</h3>

              <button className="delete-button" onClick={() => handleDelete(meal.id)}>Delete</button>

            </div>
          );
        })}

      </div>
    </>
  )};














export default CustomMealPage;