import { useState } from 'react';
import DataContext from './DataContext';

const data = {
  title: 'Welcome to our site',
  subTitle: 'this site is about weather in New York state',
  text: 'On Monday will mostly cold. It will be snowing.',
};

const DataContextProvider = ({ children }) => {
  const [count, setCount] = useState(1);

  return (
    <DataContext.Provider
      value={{
        data,
        count,
        setCount,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
