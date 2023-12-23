import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./pages/homePage/HomePage";
import Footer from "./components/footer/Footer";
import SingleProductPage from "./pages/singleProductPage/SingleProductPage";
import Cart from "./pages/cart/Cart";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<SingleProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<p>This is order page</p>} />
          <Route path="/profile" element={<p>This is profile page</p>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
