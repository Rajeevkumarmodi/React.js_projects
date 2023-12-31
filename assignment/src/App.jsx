import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
export const myContex = createContext();

function App() {
  const [cart, setCart] = useState([]);
  const [searchText, setSearchText] = useState("");

  return (
    <div>
      <myContex.Provider value={{ cart, setCart, searchText, setSearchText }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </myContex.Provider>
    </div>
  );
}

export default App;
