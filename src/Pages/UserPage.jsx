import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function UserPage() {

    const [user, setUser] = useState('');

   useEffect(()=> {
       axios
           .get('http://localhost:5005/user')
           .then((response) => setUser(response.data))
           .catch((error) => error)
   },[])


    return (
        <>
            <h1> User Name </h1>
            <div>
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

            </div>
        </>

    )
}

export default UserPage;