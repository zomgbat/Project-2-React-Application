import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import '../styles/UserPage.css'

function UserPage() {

    const [user, setUser] = useState('');
    const [calorieValue, setCalorieValue] = useState("");

    const handleCalorieUpdate = (e) => setCalorieValue(e.target.value);

    const getUserInfo = () => {
        axios
            .get('http://localhost:5005/user')
            .then((response) => setUser(response.data))
            .catch((error) => error)
    }

    const handleSubmit = (cal) => {

        axios
            .patch('http://localhost:5005/user', {
                caloriesGoal: cal
            })
            .then(response => {
                getUserInfo()
            })
            .catch(error => console.error(error));
        setCalorieValue("");
    };


    useEffect(() => {
        getUserInfo()
    }, [])


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
                <label>Daily Calorie Goal: </label>
                <p> {user.caloriesGoal}</p>

                <label> Update Daily Calorie Goal
                    <input className="calorie-input" type="number"
                        value={calorieValue} onChange={handleCalorieUpdate}
                    >


            </input>
            <button className= 'calButton' onClick={() => handleSubmit(calorieValue)}> Set Cal</button>

                </label>
            </div>
        </>

    )
}

export default UserPage;