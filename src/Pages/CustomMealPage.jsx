
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
    event.preventDefault()
    const newMeal = { name, calories: Number(calories), description, img };

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
            Recipe Image
            <input value={img} onChange={(event) => { setImg(event.target.value) }} id="setImg" type="url" />
          </label>

          <label>
            Servings
            <input value={description} onChange={(event) => { setDescription(event.target.value) }} id="setDescription" type="text" />
          </label>

          <div className="moveBtn">
            <button className='addNewButton' type="submit">Add Frequent Meal!</button>
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