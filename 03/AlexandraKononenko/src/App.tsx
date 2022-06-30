import React, { ChangeEvent, useEffect, useState } from 'react';
import Homes from './component/Homes/Homes';
import { Header } from './component/Header/Header';
import { Main } from './component/Main/main';
import Api from './component/Api/Api';

function App() {

  const [data, setData] = useState([]);
  const [value, setValue] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    Api.fetchData(`https://fe-student-api.herokuapp.com/api/hotels/${value}`, setData, setSearch);
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
    console.log("re-render");
  };

  return (
    <div className='app'>
      <Header value={value} onChange={handleChange}/>
      <Main data={data}/>
      <Homes/>
    </div>
  );
}

export default App;
