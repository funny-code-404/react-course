import {useState, useEffect } from 'react';
import DataContext from './DataContext';

const DataContextProvider = ({children}) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        try {
            fetch('https://private-anon-9d7ceddbb7-carsapi1.apiary-mock.com/manufacturers')
            .then(response => response.json())
            .then(response => setData(response)
            );
        } catch(error) {
            console.log(error);
        }   
    }, []);

    return (
        <DataContext.Provider value={data}>
         {children}
        </DataContext.Provider>
     );
}

export default DataContextProvider;