import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";
const TMDB_TOKEN = import.meta.env.VITE_TMDB_TOKEN;

const headers = {
  Authorization: "bearer" + TMDB_TOKEN,
};

async function fetchDataFromApi(url, params) {
  try {
    const { data } = await axios.get(
      `${BASE_URL}${url}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`,
      {
        headers,
        params,
      }
    );
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

// serching api

export const searchAPI = async (url, params) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}${url}&api_key=${import.meta.env.VITE_TMDB_API_KEY}`,
      {
        headers,
        params,
      }
    );
    return data;
  } catch (error) {
    return error;
  }
};

export { fetchDataFromApi };
