import React, { useState, useEffect } from "react";
import DataContext from "./DataContext";

const DataContextProvider = ({ children }) => {
  const [data, setData] = useState([]); // data - пустой массив, setData - изменение data

  useEffect(() => {
    fetch(
      "https://private-anon-9d7ceddbb7-carsapi1.apiary-mock.com/manufacturers"
    )
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  }, []);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default DataContextProvider;
