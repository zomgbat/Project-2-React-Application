import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../Components/Header";


function DayCardPage() {
    const [meals, setMeals] = useState('');
    const [newMeals, setNewMeals] = useState([]);
    const [addMeal, setAddMeal] = useState([]);

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [calories, setCalories] = useState("");
    const [description, setDescription] = useState("");
    const [img, setImg] = useState("");


    const handleSubmit = (event) => {
event.preventDefault()
    }

    const addNew = (meal) => { 
        setAddMeal([...addMeal, meal]) 
        setId(id+1) // Do we need this here?
    };

    const getAllMeals = () => {
        axios
            .get('http://localhost:5005/meals')
            .then((response) => setMeals(response.data))
            .catch((error) => error)
    }

    useEffect(() => {
        getAllMeals()
    }, [])
    useEffect(() => {
       setId(meals.length)
    }, [meals])


    return (
        <>

            <h1>Day Card Page</h1>
            <p>Today you ate:</p>
            {
                addMeal.map((meal) => {
                    return <img width={"80px"} src={meal.img} />
                })
            }
            <p>Search here your meal:</p>
            <input type="text" 
            onChange={(event) => {
                if (event.target.value.length === 0) {
                    setNewMeals([]);
                } else {
                    const filterArray = meals.filter((meal) => {
                        return meal.name.includes(event.target.value)
                    })
                    setNewMeals(filterArray);
                }
            }}
            />

            {
                newMeals.map((meal) => {
                    return <img width={"40px"} onClick={() => { addNew(meal) }} src={meal.img} alt="" />
                })
            }

            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <label>Calories:</label>
                <input type="number" value={calories} onChange={(e) => setCalories(e.target.value)} />
                <label>Description:</label>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                <label>Img:</label>
                <input type="text" value={img} onChange={(e) => setImg(e.target.value)}/>
                <button type='submit' onClick={() => { addNew({name, calories, description, img})}}> Add custom meal</button>
            </form>
  

         <Header title="Day Card Page" />
          <h1>Day Card Page</h1>
         </>


    )
}

export default DayCardPage;