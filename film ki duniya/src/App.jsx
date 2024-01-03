import React, { useEffect } from "react";
import { fetchDataFromApi } from "./utils/Api";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import SearchResult from "./pages/searchResult/SearchResult";
import Header from "./components/header/Header";
import { useDispatch } from "react-redux";
import { getApiConfigutation } from "./redux/homeSlice";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    fetchDataFromApi("/configuration").then((res) => {
      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      };

      dispatch(getApiConfigutation(url));
    });
  }

  return (
    <div className="text-gray-200">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/:query" element={<SearchResult />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
