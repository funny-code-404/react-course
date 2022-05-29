import React, { ChangeEvent, useState } from 'react';
import HotelsBlock from './components/HomesGuestsLoves/HotelsBlock';
import SearchForm from './components/UI/SearchForm/SearchForm';
import { hotelsData } from './data/hotelsData';

function App() {
  const [filterHotels, setFilterHotels] = useState(hotelsData);
  const [renderHotels, setRenderHotels] = useState(filterHotels);

  const handleFilter = (event: ChangeEvent<HTMLInputElement>): void => {
    setFilterHotels(hotelsData.filter(hotel => 
      (hotel.name + hotel.city + hotel.country).toUpperCase().includes(event.target.value.toUpperCase())
    ));
  }

  const handleRender = (): void => setRenderHotels(filterHotels);

  return (
    <div className="App">
      <HotelsBlock hotels={hotelsData} title='Homes guests loves'>{}</HotelsBlock>
      <HotelsBlock hotels={renderHotels} title='Available hotels'>
        <SearchForm onFilter={handleFilter} onRender={handleRender}/>
      </HotelsBlock>
    </div>
  );
}

export default App;