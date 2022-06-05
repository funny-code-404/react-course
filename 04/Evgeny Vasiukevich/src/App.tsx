import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import ApiService from './API/ApiService';
import HomePage from './components/HomePage/HomePage';
import HotelsBlock from './components/Hotels/HotelsBlock';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [search, setSearch] = useState('');
  const [hotels, setHotels] = useState([]);
  const searchRef = useRef<HTMLDivElement>(null);

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

  const handleRender = (): void => {
    setSearch(searchValue);
    setSearchValue('');
    searchRef?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <HomePage searchValue={searchValue} onChange={handleChange} onRender={handleRender} />
      <HotelsBlock searchRef={searchRef} hotels={hotels} />
    </div>
  );
}

export default App;