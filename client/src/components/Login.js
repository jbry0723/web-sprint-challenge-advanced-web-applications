import React, {useEffect, useState} from "react";
import axios from 'axios'
const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const initialCredentials={
    username:'',
    password:'',
  }

  const [credentials, setCredentials]=useState(initialCredentials)

  const handleChanges = e => {
    setCredentials({...credentials,[e.target.name]:e.target.value})
  };

  const login = e => {
    e.preventDefault();
    axios
    .post ("http://localhost:5000/api/login", credentials)
    .then ((resp)=>{
      localStorage.setItem("token", resp.data.payload) 
      window.location.href="/bubblepage";

    })
    .catch ((err)=>{
      console.log("error",err)
    })
  };


  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
      <form onSubmit={login}>
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChanges}
            placeholder="Enter Username"
          />
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChanges}
            placeholder="Enter Password"
          />
          <button>Log in</button>
        </form>
      
    </>
  );
};



export default Login;
