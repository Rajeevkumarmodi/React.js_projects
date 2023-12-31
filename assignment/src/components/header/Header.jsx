import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";
import { myContex } from "../../App";

function Header() {
  const navigate = useNavigate();
  const [totalAmount, setTotalAmount] = useState(0);
  const token = localStorage.getItem("authToken");
  const { cart, setSearchText } = useContext(myContex);

  const amount = cart.reduce((pre, next) => pre + next.price, 0);

  // ===========================logout ===========================

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
      <div>
        <input onChange={(e) => setSearchText(e.target.value)} type="text" />
        <button>search</button>
      </div>
      <div style={{ display: "flex", gap: "30px" }}>
        <p>Cart {cart.length}</p>
        <p>Total Amount {amount}</p>
      </div>
    </div>
  );
}

export default Header;
