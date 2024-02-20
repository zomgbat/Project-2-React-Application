import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import '../styles/UserPage.css'

function UserPage() {

    const [user, setUser] = useState('');
    const [calorieValue, setCalorieValue]=useState("");

    const handleCalorieUpdate = (e)=> setCalorieValue(e.target.value);


    const handleSubmit = (cal) => {
        axios
            .patch('http://localhost:5005/user', {
                caloriesGoal: cal
            })
            .then(response => console.log(response.data))
            .catch(error => console.error(error));
            setCalorieValue("");
    };

    useEffect(() => {
        axios
            .get('http://localhost:5005/user')
            .then((response) => setUser(response.data))
            .catch((error) => error)

    })




    return (
        <>
            <h2> User Name </h2>
            <div className="userInfo">
                <label>Name: </label>
                <p> {user.name}</p>
                <label>Surname: </label>
                <p> {user.surname}</p>
                <label>Age: </label>
                <p> {user.age}</p>
                <label>Gender: </label>
                <p> {user.gender}</p>
                <label>Height: </label>
                <p> {user.height}</p>
                <label>Weight: </label>
                <p> {user.weight}</p>
                <label>Calories Goal: </label>
                <p> {user.caloriesGoal}</p>

                <label> Update Calorie Goal
            <input className="calorie-input" type="number"
             value={calorieValue} onChange={handleCalorieUpdate}
             >

            </input>
            <button onClick={() => handleSubmit(calorieValue)}>Submit</button>
                </label>
            </div>
        </>

    )
}

export default UserPage;