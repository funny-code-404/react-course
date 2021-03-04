import React from 'react'
import { useState } from 'react'
import DataContext from './DataContext'
import FetchCar from '../FetchCar'

const DataContextProvider = ( {children} ) => {
         const [testCar, setDataCar] = useState([])

      const upState = (cars) => {
         setDataCar(cars)
      }

   return   <DataContext.Provider value={{testCar}}>
            <FetchCar upState={upState} />
               {children}
            </DataContext.Provider>
   }

export default DataContextProvider

