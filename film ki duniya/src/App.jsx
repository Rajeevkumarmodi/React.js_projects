import React, { useEffect } from "react";
import { fetchDataFromApi } from "./utils/Api";
function App() {
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetchDataFromApi("/movie/popular");
    console.log(data);
  }

  return <div className="text-gray-200">app</div>;
}

export default App;
