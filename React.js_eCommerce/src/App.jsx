import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./pages/homePage/HomePage";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<p>This is cart page</p>} />
          <Route path="/order" element={<p>This is order page</p>} />
          <Route path="/profile" element={<p>This is profile page</p>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
