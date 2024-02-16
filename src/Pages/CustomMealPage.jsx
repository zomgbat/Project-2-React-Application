import { useState } from "react";
import '../styles/CustomMealPage.css' 

function CustomMealPage(props) {


  const [mealName, setMealName] = useState("");
  const [mealCalories, setMealCalories] = useState("");
  const [mealDescription, setMealDescription] = useState("");
  const [mealImage, setMealImage] = useState("");

  const handleSubmit = (event) => {
      event.preventDefault()
      const newMeal = {mealName, mealCalories, mealDescription, mealImage};

      props.setNewMeal([newMeal, ...props.meal])
      setMealName("")
      setMealCalories("")
      setMealDescription ("")
      setMealImage("")
    

  };

    return(
      <>
          <h1>Custom Meal Creator!</h1>
          <div className="form-container">
            <form className= 'addArea' onSubmit={handleSubmit}>
                <span>Add a Meal</span>
                <div>

                    <label >
                        Meal Name
                        <input value={mealName} onChange={(event) => { setMealName(event.target.value) }} id="setMealName" type="text" />
                    </label>

                    <label>
                       Calories
                        <input value={mealCalories} onChange={(event) => { setMealCalories(event.target.value) }} id="setMealCalories" type="number" />
                    </label>

                    <label>
                        Recipe Image
                        <input value={mealImage} onChange={(event) => { setMealImage(event.target.value) }} id="setMealImage" type="url" />
                    </label>

                    <label>
                        Servings
                        <input value={mealDescription} onChange={(event) => { setMealDescription(event.target.value) }} id="setMealDescription" type="text" />
                    </label>
                </div>

                <button className= 'addNewButton' type="submit">Add Meal Now!</button>


            </form>
            </div>
      </>
    )


    
  };
  
  export default CustomMealPage;