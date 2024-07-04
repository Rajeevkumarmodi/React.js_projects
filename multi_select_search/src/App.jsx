import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `https://dummyjson.com/users/search?q=${searchTerm}`
      );
      const result = await res.json();
      setSearchResult(result.users);
    }

    if (!searchTerm) return;
    fetchData();
  }, [searchTerm]);

  return (
    <div>
      <div className="search-box">
        <input
          type="text"
          value={searchTerm}
          placeholder="search hear"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {/* search result */}
        {searchResult.length > 0 && (
          <div className="search-result">
            {searchResult?.map((user) => (
              <div key={user.id} className="user">
                <img src={user.image} alt="user image" />
                <p>
                  {user.firstName} {user.lastName}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
