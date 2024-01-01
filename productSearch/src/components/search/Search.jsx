import React from "react";
import "./search.css";

function Search({ inputValue, setInputValue }) {
  return (
    <div className="search_box">
      <input
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        type="text"
        name="search"
        placeholder="search products"
      />
      <button>Search</button>
    </div>
  );
}

export default Search;
