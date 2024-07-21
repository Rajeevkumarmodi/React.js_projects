import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Restaurant from "./pages/Restaurant";
import Footer from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant/:id" element={<Restaurant />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
