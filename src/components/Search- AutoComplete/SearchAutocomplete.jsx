import React, { useEffect, useState } from "react";
import Suggestions from "./Suggestions";
import "./styles.css"

const SearchAutocomplete = () => {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState(null);
  const [filterUsers, setFilterUsers] = useState([]);
  const [dropdown, setDropdown] = useState(false);

  async function fetchApiData() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const responsData = await response.json();
      if (responsData && responsData.users && responsData.users.length) {
        setUsers(responsData.users.map((item) => item.firstName));
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  }

  useEffect(() => {
    fetchApiData();
  }, []);

  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    setSearch(query);
    if (query.length > 1) {
      const filterData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilterUsers(filterData);
      setDropdown(true);
    } else {
      setDropdown(false);
    };

  };
  function handleClick(event){
    setSearch(event.target.innerText);
    setFilterUsers([])
    // setDropdown(false)
  }
  return (
    <>
    <div className="search-auto-container">
    <h4>Search auto Complete, it fetches data from the api based on the input you will provide. eg: names </h4>
    {
      loading ? (
        <h1>Loading data ...</h1>
      ) : (
        <input
        type="text"
        placeholder="search users..."
        name="search-bar"
        value={search}
        onChange={handleChange}
      />
      )
    }
    </div>

    <div>
      {
        dropdown && <Suggestions handleClick={handleClick} data={filterUsers}/>
      }
    </div>
    </>
  );
};

export default SearchAutocomplete;
