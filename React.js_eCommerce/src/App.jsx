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
import Category from "./pages/category/Category";
import SearchableProduct from "./pages/searchableProduct/SearchableProduct";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route exact path="/product/:id" element={<SingleProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" elemheadeent={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/shop" element={<Shop />} />
          <Route exact path="/products/:category" element={<Category />} />
          <Route
            exact
            path="/products/search/:productName"
            element={<SearchableProduct />}
          />
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

          <Route path="/*" element={<PageNotFound />} />
        </Routes>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;
