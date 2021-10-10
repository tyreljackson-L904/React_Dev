import React, { useState, useEffect } from "react";
import { client } from "./API";

const FetchData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const result = await fetch(
        `https://api.twitter.com/2/tweets/search/recent?query=%23apple`,
        client
      )
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch(err => console.log(err));

      console.log(setData(result))
    };

    getData();
  }, []);

  return <div>{data}</div>;
};

export default FetchData;
