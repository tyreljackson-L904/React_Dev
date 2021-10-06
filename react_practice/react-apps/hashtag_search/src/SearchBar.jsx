import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = () => {
  const [state, setState] = useState();
  const [value, setValue] = useState("");

  const handleChange = (e) => setValue(e.target.value);

  const defaultFetchOptions = {
    method: "GET",
    mode: "cors",
    headers: {
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer AAAAAAAAAAAAAAAAAAAAADyqUQEAAAAARDhsa%2B0dst9kxaq1aP8qM870Sns%3DJ6RjMvnU4ZwHuRguB75W2YiB49MYvRUqkHQoFnBoToSCfZC3qy`,
    },
  };

  const getResults = async () => {
    // const queryParam = `${value}`
    const url = `https://api.twitter.com/2/tweets/search/recent?query=%23apple`;
    const response = await fetch(url, defaultFetchOptions);
    const data = await response.json();
    return data;
  };

  getResults()
    .then((data) => {
      console.log("resolved", data);
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <div className="search">
      <input
        type="text"
        className="search-input"
        placeholder="Search Hashtags"
        onChange={handleChange}
        value={value}
      />
      <button className="search-btn" /*onClick={fetchData}*/>Search</button>
    </div>
  );
};

export default SearchBar;
