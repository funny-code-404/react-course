import React, { ChangeEvent, useEffect, useState } from 'react';
import ApiService from './API/ApiService';
import HomePage from './components/HomePage/HomePage';
import HotelsBlock from './components/Hotels/HotelsBlock';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [search, setSearch] = useState('');
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    fetchHotels(search);
  }, [search]);

  async function fetchHotels(value: string) {
    const response = await ApiService.getHotels(value);
    setHotels(response.data);
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(event.target.value);
  }

  const handleRender = (): void => setSearch(searchValue);

  return (
    <div className="App">
      <HomePage onChange={handleChange} onRender={handleRender} />
      <HotelsBlock hotels={hotels} />
    </div>
  );
}

export default App;