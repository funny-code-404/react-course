import React, { useState, useEffect } from "react";
import DataContext from "./DataContext";

export const url =
  "https://private-anon-928e6d58e3-carsapi1.apiary-mock.com/cars";

//на хуках
const DataContextProvider = ({ children }) => {
  const [data, setData] = useState({
    data: [],
  });

  const [carDataOpened, setOpenedCarData] = useState([]);

  const addOpenedCarData = (newOpenedData) => {
    const newData = carDataOpened;
    newData.push(newOpenedData);
    setOpenedCarData((prevData) => newData);
    console.log(`carData were setted`);
    console.log(carDataOpened);
  };

  useEffect(() => {
    fetch(url)
      .then((data) => data.json())
      .then((data1) => {
        setData(data1);
      });
  }, []);

  return (
    <DataContext.Provider
      value={{
        data,
        carDataOpened,
        addOpenedCarData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
