
import { useState } from "react";
import '../styles/CustomMealPage.css' 
import axios from "axios";


const API_URL = "http://localhost:5005/new-meals";

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
    const newMeal = { name, calories, description, img };

    axios
      .post(`${API_URL}`, newMeal)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <h1>Custom Meal Creator!</h1>
      <div className="form-container">
        <form className='addArea' onSubmit={handleSubmit}>
          <span>Add a Meal</span>
          <div>

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
          </div>

          <button className='addNewButton' type="submit">Add Meal Now!</button>


        </form>

        {meals.map((meal) => {
          return (
            <div className="all-meals-section" key={meal.id} >
              
                <h3>{meal.name}</h3>
              
            </div>
          );
        })}

      </div>
    </>
  )
};


    
  


export default CustomMealPage;