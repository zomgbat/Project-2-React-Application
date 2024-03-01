import React, { useState, useEffect } from 'react';
import '../styles/SignUpPage.css';
import axios from 'axios';

const API_URL = "http://localhost:5005/auth/signup";

function SignUpPage() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")


  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${API_URL}`, { name, email, password })
      .then((response) => {
        console.log("Signed Up!", response.data);

      })

    .catch ((error) => console.log("Sign Up Error!", error))


    }


return (
  <div className="SignUpContainer">
    <form className="SignUpFormContainer" onSubmit={handleSubmit}>
      <span className="SignUpTitle">Sign Up Page!</span>

      <label>
        Name
        <input value={name} onChange={(event) => setName(event.target.value)} id="setName" type="text" />
      </label>

      <label>
        Email
        <input value={email} onChange={(event) => setEmail(event.target.value)} id="setEmail" type="email" />
      </label>

      <label>
        Password
        <input value={password} onChange={(event) => setPassword(event.target.value)} id="setPassword" type="password" />
      </label>

      <div className="SignUpButtonDiv">
        <button className='signUpButton' type="submit">Sign Up!</button>
      </div>

    </form>
  </div>
);
}

export default SignUpPage;
