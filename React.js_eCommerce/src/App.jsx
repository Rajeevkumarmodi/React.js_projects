import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./pages/homePage/HomePage";
import Footer from "./components/footer/Footer";
import SingleProductPage from "./pages/singleProductPage/SingleProductPage";
import Cart from "./pages/cart/Cart";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import OrderSuccess from "./pages/orderSuccess/OrderSuccess";
import MyOrders from "./pages/myOrders/MyOrders";
import Profile from "./pages/profile/Profile";
import Shop from "./pages/shop/Shop";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<SingleProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route
            path="/myorder"
            element={
              <ProtectedRoute>
                <MyOrders />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
