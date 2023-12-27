import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoute({ children }) {
  const userInfo = useSelector((state) => state.allCartData.userInfo);
  return userInfo ? children : <Navigate to="/"></Navigate>;
}

export default ProtectedRoute;
