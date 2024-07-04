import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [selectedUser, setSelectedUser] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [uniqueUserId, setUniqueUserId] = useState(new Set());

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `https://dummyjson.com/users/search?q=${searchTerm}`
      );
      const result = await res.json();
      setSearchResult(result.users);
    }

    if (searchTerm) {
      fetchData();
    } else {
      setSearchResult([]);
      return;
    }
  }, [searchTerm]);

  function handleSelectUser(user) {
    setSelectedUser([...selectedUser, user]);
    setUniqueUserId((prevSet) => new Set(prevSet).add(user.id));
    setSearchResult([]);
    setSearchTerm("");
  }

  function handleRemoveSelectedUser(user) {
    const filterUser = selectedUser.filter((us) => us.id !== user.id);
    setSelectedUser(filterUser);
    uniqueUserId.delete(user.id);
  }

  return (
    <div>
      <div className="search-box">
        {/* display sleseted user */}
        <div className="delected-users">
          {selectedUser?.map((user) => (
            <div
              key={user.id}
              onClick={() => handleRemoveSelectedUser(user)}
              className="delected-user"
            >
              <img src={user.image} alt="user image" />
              <p>
                {user.firstName} {user.lastName}
              </p>
              <span>×</span>
            </div>
          ))}
        </div>

        <div className="input">
          <input
            type="text"
            value={searchTerm}
            placeholder="search hear"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {/* search result */}
          {searchResult.length > 0 && (
            <div className="search-result">
              {searchResult?.map(
                (user) =>
                  !uniqueUserId.has(user.id) && (
                    <div
                      onClick={() => handleSelectUser(user)}
                      key={user.id}
                      className="user"
                    >
                      <img src={user.image} alt="user image" />
                      <p>
                        {user.firstName} {user.lastName}
                      </p>
                    </div>
                  )
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
