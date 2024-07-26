import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Restaurant from "./pages/Restaurant";
import Footer from "./components/Footer";
import Help from "./pages/Help";
import Offer from "./pages/Offer";
import Search from "./pages/Search";
import Cart from "./pages/Cart";
import AppContex from "./contex/SwiggyContex";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <AppContex>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurant/:resId" element={<Restaurant />} />
          <Route path="/help" element={<Help />} />
          <Route path="/offer" element={<Offer />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <Toaster />
    </AppContex>
  );
}

export default App;
