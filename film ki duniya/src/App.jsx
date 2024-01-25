import React, { useEffect } from "react";
import { fetchDataFromApi } from "./utils/Api";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import SearchResult from "./pages/searchResult/SearchResult";
import Header from "./components/header/Header";
import { useDispatch } from "react-redux";
import { getApiConfigutation, getGenres } from "./redux/homeSlice";
import Footer from "./components/footer/Footer";
import MovieDetail from "./pages/movieDetail/MovieDetail";
import Explore from "./pages/explore/Explore";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchData();
    genres();
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

  // fetch genres

  async function genres() {
    let promises = [];
    let endPoints = ["tv", "movie"];
    let allGenres = {};

    endPoints.forEach((url) => {
      promises.push(fetchDataFromApi(`/genre/${url}/list`));
    });

    const data = await Promise.all(promises);

    data.map(({ genres }) => {
      return genres.map((item) => (allGenres[item.id] = item));
    });

    dispatch(getGenres(allGenres));
  }

  return (
    <div className="text-gray-200">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/search/:query" element={<SearchResult />} />
          <Route exact path="/:mediaType/:id" element={<MovieDetail />} />
          <Route exact path="/explore/:mediatype" element={<Explore />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
