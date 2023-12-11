import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import SingleBlog from "./pages/singleBlog/SingleBlog";
import Service from "./pages/service/Service";
import About from "./pages/about/About";
import Blogs from "./pages/blogs/Blogs";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:id" element={<SingleBlog />} />
        <Route path="/contact" element={<p>this is contact page</p>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
