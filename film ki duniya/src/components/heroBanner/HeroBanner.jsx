import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useApiFetch from "../../hooks/useApiFetch";

function HeroBanner() {
  const navigate = useNavigate();
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");

  const { data, loading } = useApiFetch("/movie/upcoming");
  console.log(data);
  //=====================   handel search==========================
  function handelSearch(event) {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  }

  return (
    <div>
      <div>
        <h2>Welcome.</h2>
        <p>Millions of movies, TV shows and people to discover. Explore now.</p>
      </div>
      <div>
        <input
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          onKeyUp={handelSearch}
        />
        <button>Search</button>
      </div>
    </div>
  );
}

export default HeroBanner;
