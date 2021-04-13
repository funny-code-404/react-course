import React from 'react';
import { useEffect, useState } from 'react';
import DataContext from './DataContext.js';

const DataContextProvider = ({ children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://private-anon-9d7ceddbb7-carsapi1.apiary-mock.com/manufacturers')
    .then(data => data.json())
    .then(data => setData(data))
  }, [setData]);

  return (
    <DataContext.Provider value={{
      data
    }}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContextProvider;
