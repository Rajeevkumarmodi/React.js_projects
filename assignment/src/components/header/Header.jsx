import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";

function Header() {
  const navigate = useNavigate();
  const token = localStorage.getItem("authToken");

  function logoutHandler() {
    localStorage.removeItem("authToken");
    navigate("/login");
  }
  return (
    <div className="header">
      <div className="links">
        {token ? (
          <button onClick={logoutHandler}>Logout</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
        <Link to="/">Home</Link>
      </div>
      <div>Cart</div>
    </div>
  );
}

export default Header;
