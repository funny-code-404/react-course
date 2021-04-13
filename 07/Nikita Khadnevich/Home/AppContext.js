import React from 'react'
import '../App.css';
import CarContext from './CarContext'
import DataContextProvider from './Context/DataContextProvider'

const AppContext = () => {
  return (
    <>
    <DataContextProvider>
        <CarContext />
    </DataContextProvider>
    </>
  );
}

export default AppContext;
