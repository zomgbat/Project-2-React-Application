import { useEffect, useState } from "react";
import axios from "axios";
import '../styles/DayCardPage.css'

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
        setId(id+1)
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
            <p className="todayMeat">Today you ate:</p>
            {
                addMeal.map((meal) => {
                    return <img width={"80px"} src={meal.img} />
                })
            }
            <p className="searchMeat">Search here your meal:</p>
            <input className="searchBar"type="text" 
            onChange={(event) => {
                const filterArray = meals.filter((meal) => {
                    return meal.name.includes(event.target.value)
                })
                setNewMeals(filterArray);
            }}
            />

            {
                newMeals.map((meal) => {
                    return <img width={"40px"} onClick={() => { addNew(meal) }} src={meal.img} alt="" />
                })
            }

            <form className='form' onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <label>Calories:</label>
                <input type="number" value={calories} onChange={(e) => setCalories(e.target.value)} />
                <label>Description:</label>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                <label>Img:</label>
                <input type="text" value={img} onChange={(e) => setImg(e.target.value)}/>
                <label>Id:</label>
                <input type="text" value={id} />
                <button className='btn' type='submit' onClick={() => { addNew({name, calories, description, img})}}> Add custom meal</button>
            </form>
        </>

    )
}

export default DayCardPage;