import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Restaurant from "./pages/Restaurant";
import Footer from "./components/Footer";
import Help from "./pages/Help";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant/:resId" element={<Restaurant />} />
        <Route path="/help" element={<Help />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
