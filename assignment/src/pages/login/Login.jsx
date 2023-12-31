import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    username: "",
    password: "",
  });

  function changeHandler(e) {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  }

  // =================================login logic=================================

  async function loginHandler(e) {
    try {
      e.preventDefault();
      const res = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputValue),
      });

      // username:kminchelle
      // password : 0lelplR

      const jsonData = await res.json();
      if (jsonData.hasOwnProperty("email")) {
        localStorage.setItem("authToken", jsonData.token);
        navigate("/");
      } else {
        alert(jsonData.message);
      }
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <form className="loginPage">
      <h3>Login Page</h3>
      <div className="inputBox">
        <label htmlFor="username">Username: </label>
        <input
          onChange={changeHandler}
          name="username"
          value={inputValue.username}
          type="text"
          id="username"
        />
      </div>
      <div className="inputBox">
        <label htmlFor="password">Password: </label>
        <input
          onChange={changeHandler}
          name="password"
          value={inputValue.password}
          type="password"
          id="password"
        />
      </div>
      <button onClick={loginHandler}>Login</button>
    </form>
  );
}

export default Login;
