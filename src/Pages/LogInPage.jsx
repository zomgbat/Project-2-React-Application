import React, { useState } from 'react';
import '../styles/LogInPage.css';
import axios from 'axios';

const API_URL = "http://localhost:5005/auth/login";

function LogInPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")


  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${API_URL}`, { email, password })
      .then((response) => {
        console.log("Logged In!", response.data);

      })

    .catch ((error) => console.log("Log In Error!", error))


    }
 

  return (
    <div className="LogInContainer">
      <form className="LogInFormContainer" onSubmit={handleSubmit}>
        <span className="loginTitle">Log In!</span>

        <label>
          Email
          <input value={email} onChange={(event) => setEmail(event.target.value)} id="setEmail" type="email" />
        </label>

        <label>
          Password
          <input value={password} onChange={(event) => setPassword(event.target.value)} id="setPassword" type="password" />
        </label>

        <div className="LogInButtonDiv">
          <button className='loginButton' type="submit">Log In!</button>
        </div>

      </form>
    </div>
  );
}

export default LogInPage;
