import React, { useEffect, useState } from "react";
import("./styles.css");

const GithubProfileFInder = () => {
  const [userName, setUserName] = useState("sohailnadaf46");
  const [foundUser, setFoundUser] = useState(null);

  async function fetchUserData() {
    try {
      const response = await fetch(`https://api.github.com/users/${userName}`);

      const responsData = await response.json();
      setFoundUser(responsData);
      console.log(responsData);
    } catch (error) {
      console.error(error);
    }
  }
  function handleSearch() {
    fetchUserData();
  }

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="github-main-container">
      <div className="inputcontainer">
        <input
          type="text"
          name="profile-finder"
          placeholder="Search username ..."
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {foundUser && (
        <div className="user-details">
          <img
            className="profile-img"
            src={foundUser.avatar_url}
            alt="profile-img"
          />
          <p className="user-name">{foundUser.name}</p>
          <a
            href={foundUser.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="user-link"
          >
            {foundUser.html_url}
          </a>
          <p className="user-bio">{foundUser.bio}</p>
        </div>
      )}
    </div>
  );
};

export default GithubProfileFInder;
