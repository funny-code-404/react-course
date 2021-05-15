import { useState, useEffect } from 'react';
import DataContext from './DataContext';

const DataContextProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      fetch('https://api.thecatapi.com/v1/breeds') //здесь другая ссылка потому что старая отвалилась
      .then((data) => data.json())
      .then((data) => setData({dataCat: data}))
    } catch(error) {
      console.error('произошла ошибка')
    }
  }, []);

  console.log(data)

  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContextProvider;